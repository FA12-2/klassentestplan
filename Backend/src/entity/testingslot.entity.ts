import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { SchoolClassEntity } from "./schoolclass.entity";

@Entity()
export class TestingSlotEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @ManyToMany(() => SchoolClassEntity, schoolClass => schoolClass.testingSlots)
    schoolClasses: Array<SchoolClassEntity>
}