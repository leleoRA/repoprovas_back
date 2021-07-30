import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import Subjects from "./Subjects";
import Teachers from "./Teachers";
import Categories from "./Categories";

@Entity('tests')
export default class Tests{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subjectLink: string;

    @Column()
    categoryId: number;

    @Column()
    subjectId: number;

    @Column()
    teacherId: number;

    @ManyToOne(() => Subjects, subjects => subjects.tests)
    subjects: Subjects;
    @ManyToOne(() => Teachers, teachers => teachers.tests)
    teachers: Teachers;
    @ManyToOne(() => Categories, categories => categories.tests)
    categories: Categories;
}
