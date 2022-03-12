import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SchoolClassModule } from './schoolclass.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), // Automatically imports an 'ormconfig.json' in the root directoy
    SchoolClassModule
  ],
})
export class AppModule { }
