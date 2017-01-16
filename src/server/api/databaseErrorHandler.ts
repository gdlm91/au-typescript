import { Response } from "express";

const hri = require('human-readable-ids').hri;

export function databaseErrorHandler(res: Response, message: string, err: any) {
    const id = hri.random();
    console.error("Database error occurred ", id, err);
    res.status(500).json({ code: 'ERR-002', message: `${message}, error code ${id}` });
}