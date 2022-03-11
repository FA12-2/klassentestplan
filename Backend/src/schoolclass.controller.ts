import { Controller, Get, Param, Post } from '@nestjs/common';
import { SchoolClassService } from './schoolclass.service';

@Controller('schoolclass')
export class SchoolClassController {
  constructor(private readonly schoolClassService: SchoolClassService) { }

  @Get()
  getAllSchoolClasses() {
    return this.schoolClassService.getAllSchoolClasses();
  }

  @Get(':id')
  getSchoolClassById(@Param('id') id: string) {
    return this.schoolClassService.getSchoolClass(Number(id));
  }
}
