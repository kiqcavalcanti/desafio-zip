import { runSeeder, Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { FileSeeder } from './file.seeder';
import { FolderSeeder } from './folder.seeder';

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, FolderSeeder);
    await runSeeder(dataSource, FileSeeder);
  }
}
