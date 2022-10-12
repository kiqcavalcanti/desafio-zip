import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Folder } from '../../app/zip/Entities/folder.entity';

export class FolderSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const folderRepository = dataSource.getRepository(Folder);

    const folderData = [
      {
        name: 'Cliente1',
        id: '1e6a48d7-45ce-4456-b06f-8a342435f07a',
      },
      {
        name: '2021',
        id: '58d68045-adc1-4216-99d3-81465fcb3a2d',
        parentFolderId: '1e6a48d7-45ce-4456-b06f-8a342435f07a',
      },
      {
        name: 'Boletos',
        id: 'ec60e191-ae43-44a0-b951-2fcf94dc79c4',
        parentFolderId: '58d68045-adc1-4216-99d3-81465fcb3a2d',
      },

      {
        name: '2022',
        id: '927edec3-59af-4772-ba4e-36ffdc490f3b',
        parentFolderId: '1e6a48d7-45ce-4456-b06f-8a342435f07a',
      },
      {
        name: 'Relatorios',
        id: 'e7f0abd1-370f-4053-a94f-e2c2f323f96e',
        parentFolderId: '927edec3-59af-4772-ba4e-36ffdc490f3b',
      },

      {
        name: 'Cliente2',
        id: 'f4a125b1-df04-448c-8592-a01fa2b40a6d',
      },
      {
        name: 'backup',
        id: '840adfed-57da-4e18-a1eb-01ee47a06576',
        parentFolderId: 'f4a125b1-df04-448c-8592-a01fa2b40a6d',
      },

      {
        name: 'arquivos',
        id: 'ab715217-b5a7-4c3d-8012-90a49c8c9f6e',
        parentFolderId: '840adfed-57da-4e18-a1eb-01ee47a06576',
      },
    ];

    for (let i = 0; i < folderData.length; i++) {
      const folderExists = await folderRepository.findOneBy({
        id: folderData[i].id,
      });

      if (folderExists) {
        return null;
      }

      const folder = folderRepository.create(folderData[i]);
      await folderRepository.save(folder);
    }
  }
}
