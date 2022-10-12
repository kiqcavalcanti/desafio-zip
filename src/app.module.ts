import { Module } from '@nestjs/common';

import { ZipModule } from './app/zip/zip.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connection } from './config/typeorm.config';

@Module({
  imports: [ZipModule, TypeOrmModule.forRoot(connection)],
  controllers: [],
  providers: [],
})
export class AppModule {}
