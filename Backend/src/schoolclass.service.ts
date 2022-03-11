import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { SchoolClassEntity } from './entity/schoolclass.entity';

@Injectable()
export class SchoolClassService {
    constructor(
        @InjectRepository(SchoolClassEntity)
        private schoolClassRepository: Repository<SchoolClassEntity>
    ) { }

    getAllSchoolClasses(): Promise<Array<SchoolClassEntity>> {
        return this.schoolClassRepository.find();
    }

    async getSchoolClass(id: number): Promise<SchoolClassEntity> {
        const schoolClass = await this.schoolClassRepository.findOne(id);
        if (schoolClass) {
            return schoolClass;
        } else {
            throw new HttpException("School class not found.", HttpStatus.NOT_FOUND)
        }
    }
}