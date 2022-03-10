import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { SchoolClass } from "./SchoolClass";

@Entity()
export class TestingSlot {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @ManyToMany(() => SchoolClass, schoolClass => schoolClass.testingSlots)
    schoolClasses : Array<SchoolClass>
}