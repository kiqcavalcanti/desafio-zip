import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Folder } from './folder.entity';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Index()
  key: string;

  @Column({ name: 'folder_id', type: 'uuid' })
  @Index()
  folderId: string;

  @OneToOne(() => Folder)
  folder: Folder;
}
