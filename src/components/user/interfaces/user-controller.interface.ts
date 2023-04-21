import { Request, Response } from "express";

export interface IUserController {
    createUser(req: Request, res: Response): Promise<void>
    deleteUser(req: Request, res: Response): Promise<void>
    deleteUser(req: Request, res: Response): Promise<void>
    findUser(req: Request, res: Response): Promise<void>
    findAllUsers(req: Request, res: Response): Promise<void>
    updateUser(req: Request, res: Response): Promise<void>
    login(req: Request, res: Response): Promise<any>
}