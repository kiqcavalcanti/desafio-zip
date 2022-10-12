import { Module } from '@nestjs/common';
import { ZipController } from './Controllers/zip.controller';
import { ZipService } from './Services/zip.service';
import { File } from './Entities/file.entity';
import { Folder } from './Entities/folder.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([File, Folder])],
  controllers: [ZipController],
  providers: [ZipService],
})
export class ZipModule {}
