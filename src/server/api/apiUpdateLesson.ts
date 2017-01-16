import { Request, Response } from "express";
import { updateLesson } from "../queries/updateLesson";
import { onSuccess } from './onSuccess';
import { onError } from './onError';
import { databaseErrorHandler } from './databaseErrorHandler';

export function apiUpdateLesson(req: Request, res: Response) {
    const lessonId = req.params.id;

    updateLesson(lessonId, req.body)
        .then(results => onSuccess(res, results))
        .catch(err => databaseErrorHandler(res, "Update of lesson failed", err))
        .catch(err => onError(res, "Update Lesson Failed", err));
}