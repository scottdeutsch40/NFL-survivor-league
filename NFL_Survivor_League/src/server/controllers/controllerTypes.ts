import { NextFunction, Request, Response } from 'express';

export interface ControllerMethod {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface Controller {
  [key: string]: ControllerMethod;
}