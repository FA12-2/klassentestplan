import { WeekIdentifiers } from "src/type/weekidentifiers";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { TeacherEntity } from "./teacher.entity";
import { TestingSlotEntity } from "./testingslot.entity";

@Entity()
export class SchoolClassEntity {

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

    @ManyToMany(() => TestingSlotEntity, testingSlot => testingSlot.schoolClasses)
    testingSlots: Array < TestingSlotEntity >

    @ManyToOne(() => TeacherEntity, teacher => teacher.schoolClasses)
    classTeacher: TeacherEntity
}