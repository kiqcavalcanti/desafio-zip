import { File } from '../app/zip/Entities/file.entity';
import { Folder } from '../app/zip/Entities/folder.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const connection: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'desafio-zip',
  password: 'desafio-zip',
  database: 'desafio-zip',
  entities: [File, Folder],
  synchronize: true,
};
