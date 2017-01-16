import { Request, Response } from "express";
import { deleteLesson } from "../queries/deleteLesson";
import { onSuccess } from './onSuccess';
import { onError } from './onError';
import { databaseErrorHandler } from './databaseErrorHandler';

export function apiDeleteLesson(req: Request, res: Response) {
    const lessonId = req.params.id;

    deleteLesson(lessonId)
        .then(results => onSuccess(res, results))
        .catch(err => databaseErrorHandler(res, "Deletion of lesson failed", err))
        .catch(err => onError(res, "Delete Lesson Failed", err));
}