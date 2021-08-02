import { getRepository } from "typeorm";

import Subjects from "../entities/Subjects";
import Categories from "../entities/Categories";

export async function allSubjectsAndTeachers() {
    const subjects = await getRepository(Subjects).find({relations:["teachers"]})

    return subjects;
}