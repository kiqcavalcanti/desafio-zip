import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { connection } from '../config/typeorm.config';
import { MainSeeder } from './seeds/main.seeder';

const options: DataSourceOptions & SeederOptions = {
  ...(connection as DataSourceOptions),
  seeds: [MainSeeder],
};

export const dataSource = new DataSource(options);
