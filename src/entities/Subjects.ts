import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";

import Tests from "./Tests";
import Teachers from "./Teachers";

@Entity('subjects')
export default class Subjects{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, tests => tests.subjects)
    tests: Tests[];
    
    @ManyToMany(() => Teachers)
    @JoinTable()
    teachers: Teachers[];
}