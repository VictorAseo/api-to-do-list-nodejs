import { connect, executeQuery, disconnect } from '../../database/connection';
import { IActivityService } from './interfaces/activity-service.interface';
import { IStoreActivityDTO } from './interfaces/store-activity.interface';
import { IResponseJson } from '../base/interfaces/response-json.interface';

export class ActivityService implements IActivityService {

    public async createActivityService(activityParams: IStoreActivityDTO): Promise<IResponseJson> {
        try {
            const {name, description} = activityParams;
            const connection: IResponseJson = await connect();

            if(connection.status) {
                const queryResult: IResponseJson = await executeQuery(`INSERT INTO activities (name, description, created_at, updated_at) VALUES ('${name}', '${description}', NOW(), NULL);`);
               
               if(queryResult.status) return {status: true, data: null, message: 'Activity created successfully!'};
            }
            
            return {status: false, data: null};
        } catch(error: any){
            console.error(error);
            return {status: false, data: null, message: error?.toString()};
        } finally {
            await disconnect();
        }
    }

    public async findByIdActivityService(id: number): Promise<IResponseJson> {
        try {
            const connection: IResponseJson = await connect();

            if(connection.status) {
                const queryResult: IResponseJson = await executeQuery(`SELECT * FROM activities WHERE id=${id}`);

                if(queryResult.status) return {status: true, data: queryResult.data.length > 0 ? { activity: queryResult.data[0] }: null};
            }

            return {status: false, data: null};
        } catch(error: any) {
            console.error(error);
            return {status: false, data: null, message: error?.toString()};
        } finally {
            await disconnect();
        }
    }
    
    public async deleteActivityService(id: number): Promise<IResponseJson> {
        try {
            const connection: IResponseJson = await connect();
            
            if(connection.status) {
                const queryResult: IResponseJson = await executeQuery(`DELETE FROM activities WHERE id=${id}`);
                
                if(queryResult.status) return {status: true, data: null, message: 'Activity deleted successfully!'}
            }
            
            return {status: false, data: null};
        } catch(error: any) {
            console.error(error);
            return {status: false, data: null, message: error?.toString()};
        } finally {
            await disconnect();
        }
    }
    
    public async findAllActivityService(): Promise<IResponseJson> {
        try {
            const connected: Boolean = await connect();
            
            if(connected) {
                const activities: IResponseJson = await executeQuery(`SELECT * FROM activities`);
                return {status: true, data: activities.data};
            }
            
            return {status: false, data: null};
        } catch(error: any) {
            console.error(error);
            return {status: false, data: null, message: error?.toString()};
        } finally {
            await disconnect();
        }
    }

    public async findExistingNameActivityService(activityName: string): Promise<IResponseJson> {
        try {
            const connection: IResponseJson = await connect();
    
            if(connection.status) {
                const queryResult: IResponseJson = await executeQuery(`SELECT id, name FROM activities WHERE name='${activityName}'`);
    
                if(queryResult.status) return {status: true, data: queryResult.data.length > 0 ? { activity: queryResult.data[0] }: null};
            }
    
            return {status: false, data: null};
        } catch(error: any) {
            console.error(error);
            return {status: false, data: null, message: error?.toString()};
        } finally {
            await disconnect();
        }
    }
}
