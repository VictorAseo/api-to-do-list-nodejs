import { IResponseJson } from "../../base/interfaces/response-json.interface";
import { IStoreActivityDTO } from "./store-activity.interface";

export interface IActivityService {
    createActivityService(activityParams: IStoreActivityDTO): Promise<IResponseJson>;
    deleteActivityService(id: number): Promise<IResponseJson>;
    findByIdActivityService(id: number): Promise<IResponseJson>;
    findAllActivityService(): Promise<IResponseJson>;
    findExistingNameActivityService(activityName: string): Promise<IResponseJson>;
}