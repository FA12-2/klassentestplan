
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolClassEntity } from 'src/entity/schoolclass.entity';
import { SchoolClassController } from 'src/schoolclass.controller';
import { SchoolClassService } from 'src/schoolclass.service';


@Module({
  imports: [TypeOrmModule.forFeature([SchoolClassEntity])],
  providers: [SchoolClassService],
  controllers: [SchoolClassController],
})
export class SchoolClassModule {}
