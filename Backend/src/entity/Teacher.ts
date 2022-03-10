import { GenderTitles, ProfessionTitles } from "src/types/Titles";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { SchoolClass } from "./SchoolClass";

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    genderTitle: GenderTitles;

    @Column()
    professionTitle: ProfessionTitles;

    @OneToMany(() => SchoolClass, schoolClass => schoolClass.classTeacher)
    schoolClasses : Array<SchoolClass>
}