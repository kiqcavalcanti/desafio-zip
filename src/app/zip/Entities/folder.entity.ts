import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('folders')
export class Folder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'parent_folder_id', type: 'uuid', nullable: true })
  @Index()
  parentFolderId: string;

  @OneToOne(() => Folder)
  parentFolder: Folder;
}
