import { Request, Response } from 'express';

import * as testsService from "../services/testsService";

export async function allSubjectsAndTeachers (req: Request, res: Response) {
    try{
        const result = await testsService.allSubjectsAndTeachers();
        return res.send(result);
        
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function addTest(req: Request, res: Response) {
    try{

    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}