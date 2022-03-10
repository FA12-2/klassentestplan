import { WeekIdentifiers } from "src/types/weekIdentifiers";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";
import { Teacher } from "./Teacher";
import { TestingSlot } from "./TestingSlot";

@Entity()
export class SchoolClass {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectShorthand: string;

    @Column()
    gradeLevel: string;

    @Column()
    gradeSubLevel: boolean;

    @Column()
    weekIdentifier: WeekIdentifiers;

    @ManyToMany(() => TestingSlot, testingSlot => testingSlot.schoolClasses)
    testingSlots : Array<TestingSlot>

    @ManyToOne(() => Teacher, teacher => teacher.schoolClasses)
    classTeacher : Teacher
}