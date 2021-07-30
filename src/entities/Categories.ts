import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import Tests from "./Tests";

@Entity('categories')
export default class Categories{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, tests => tests.categories)
    tests: Tests[];
}