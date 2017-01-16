import { Request, Response } from "express";
import { createLesson } from "../queries/createLesson";
import { onSuccess } from './onSuccess';
import { onError } from './onError';
import { databaseErrorHandler } from './databaseErrorHandler';

export function apiCreateLesson(req: Request, res: Response) {
    createLesson(req.body)
        .then(results => onSuccess(res, results))
        .catch(err => databaseErrorHandler(res, "Creation of lesson failed", err))
        .catch(err => onError(res, "Create Lesson Failed", err));
}