import { Request, Response } from "express";
import { findAllCourses } from "../queries/findAllCourses";
import { onError } from "./onError";

export function apiGetAllCourses(req: Request, res: Response) {
    findAllCourses()
        .then(results => {
            res.status(200).json({ results });
        })
        .catch(err => onError(res, "Find All Courses Failed", err));
}