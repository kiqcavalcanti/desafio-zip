import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { File } from '../Entities/file.entity';
import * as path from 'path';
import AdmZip from 'adm-zip';
import moment from 'moment';

@Injectable()
export class ZipService {
  constructor(
    @InjectRepository(File)
    protected readonly fileRepository: Repository<File>,
  ) {}

  async zipFiles(fileIds: string[]): Promise<{ zip: any; fileName: string }> {
    const files = await this.fileRepository.find({
      where: { id: In([...fileIds]) },
    });

    if (files.length === 0) {
      throw new Error('Nenhum arquivo foi encontrado');
    }

    const zip = new AdmZip();

    files.forEach((file) => {
      const filePath = path.resolve(
        './',
        'storage',
        `${file.key}/${file.name}`,
      );
      zip.addLocalFile(filePath);
    });

    return {
      zip: zip.toBuffer(),
      fileName: `arquivos-${moment().format('D-M-Y')}.zip`,
    };
  }
}
