import { Request, Response } from "express";
import { findAllCourses } from "../queries/findAllCourses";
import { onSuccess } from "./onSuccess";
import { onError } from "./onError";

export function apiGetAllCourses(req: Request, res: Response) {
    findAllCourses()
        .then(results => onSuccess(res, results))
        .catch(err => onError(res, "Find All Courses Failed", err));
}