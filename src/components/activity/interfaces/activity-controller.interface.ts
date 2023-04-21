import { Request, Response } from "express";

export interface IActivityController {
    createActivity(req: Request, res: Response): Promise<void>
    deleteActivity(req: Request, res: Response): Promise<void>
    findActivity(req: Request, res: Response): Promise<void>
    findAllActivities(req: Request, res: Response): Promise<void>
    updateActivity(req: Request, res: Response): Promise<void>
}