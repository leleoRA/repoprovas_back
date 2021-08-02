import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";

import Tests from "./Tests";
import Subjects from "./Subjects";

@Entity('teachers')
export default class Teachers{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, tests => tests.teachers)
    tests: Tests[];

    @ManyToMany(() => Subjects, subjects => subjects.teachers)
    subjects: Subjects
}