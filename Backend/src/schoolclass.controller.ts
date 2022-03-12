import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import SchoolClass from './dto/schoolclass.dto';
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

  @Post()
  addSchoolClass(@Body() schoolClass : SchoolClass) {
    console.log(schoolClass);
    return this.schoolClassService.addSchoolClass(schoolClass);
  }

}
