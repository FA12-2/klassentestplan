import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SchoolClassController } from './schoolclass.controller';
import { SchoolClassService } from './schoolclass.service';

@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [SchoolClassController],
  providers: [SchoolClassService],
})
export class AppModule { }
