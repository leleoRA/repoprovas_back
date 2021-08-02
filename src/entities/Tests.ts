import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

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
    testLink: string;

    @ManyToOne(() => Categories)
    @JoinColumn()
    categories: Categories;

    @ManyToOne(() => Subjects)
    @JoinColumn()
    subjects: Subjects;

    @ManyToOne(() => Teachers)
    @JoinColumn()
    teachers: Teachers;
}
