import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { File } from '../../app/zip/Entities/file.entity';

export class FileSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const fileRepository = dataSource.getRepository(File);

    const fileData = [
      {
        id: '9a02da15-f7df-4196-b4d8-1ded88c50584',
        name: 'boleto1.txt',
        key: 'public/Cliente1/2021/Boletos',
        folderId: 'ec60e191-ae43-44a0-b951-2fcf94dc79c4',
      },

      {
        id: 'c64e671e-3dcf-4ba7-857d-ea9d806f0127',
        name: 'boleto2.txt',
        key: 'public/Cliente1/2021/Boletos',
        folderId: 'ec60e191-ae43-44a0-b951-2fcf94dc79c4',
      },

      {
        id: '8f91f22f-d4ca-41de-9cf6-f581145ac90f',
        name: 'relatorio1.txt',
        key: 'public/Cliente1/2022/Relatorios',
        folderId: 'e7f0abd1-370f-4053-a94f-e2c2f323f96e',
      },

      {
        id: '4098539d-919d-4e45-bd85-3e2a844c1baf',
        name: 'relatorio2.txt',
        key: 'public/Cliente1/2022/Relatorios',
        folderId: 'e7f0abd1-370f-4053-a94f-e2c2f323f96e',
      },

      {
        id: '259fa4c8-6198-47c5-9192-680a46af0ab7',
        name: 'logo.png',
        key: 'public/Cliente2',
        folderId: 'f4a125b1-df04-448c-8592-a01fa2b40a6d',
      },

      {
        id: 'ba13bcf0-9f2a-4d46-ae98-12d3523aa632',
        name: 'arquivo.txt',
        key: 'public/Cliente2/backup/arquivos',
        folderId: '840adfed-57da-4e18-a1eb-01ee47a06576',
      },
    ];

    for (let i = 0; i < fileData.length; i++) {
      const fileExists = await fileRepository.findOneBy({
        id: fileData[i].id,
      });

      if (fileExists) {
        return null;
      }

      const file = fileRepository.create(fileData[i]);
      await fileRepository.save(file);
    }
  }
}
