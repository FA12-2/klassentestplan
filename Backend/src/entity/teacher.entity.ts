import { GenderTitles, ProfessionTitles } from "src/type/titles";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SchoolClassEntity } from "./schoolclass.entity";

@Entity()
export class TeacherEntity {

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

    @OneToMany(() => SchoolClassEntity, schoolClass => schoolClass.classTeacher)
    schoolClasses: Array<SchoolClassEntity>
}