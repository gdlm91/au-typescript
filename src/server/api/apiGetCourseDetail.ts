import { Request, Response } from "express";
import { findCourseDetail } from "../queries/findCourseDetail";
import { onSuccess } from "./onSuccess";
import { onError } from "./onError";

export function apiGetCourseDetail(req: Request, res: Response) {
    const courseId = parseInt(req.params.id);

    findCourseDetail(courseId)
        .then(results => onSuccess(res, results))
        .catch(err => onError(res, "Find Course Detail failed", err));
}