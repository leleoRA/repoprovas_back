import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";

import Teachers from "./Teachers";

@Entity('subjects')
export default class Subjects{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(() => Teachers, teachers => teachers.subjects)
    @JoinTable()
    teachers: Teachers[];
}