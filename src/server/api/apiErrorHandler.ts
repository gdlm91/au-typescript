import {Request, Response, NextFunction} from "express";


export function apiErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error("API error handler trigered", err);

    res.status(500).json({errorCode: 'ERR-001', message: "Internal Server Error"});
}