import { Controller, Post, Body, Res } from '@nestjs/common';
import { ZipService } from '../Services/zip.service';
import { Response } from 'express';

@Controller('zip')
export class ZipController {
  constructor(private readonly zipService: ZipService) {}

  @Post('files')
  async zipFiles(
    @Body('fileIds') fileIds: string[],
    @Res() response: Response,
  ): Promise<void> {
    try {
      const { zip, fileName } = await this.zipService.zipFiles(fileIds);

      response.header('Content-Type', 'application/zip');
      response.header(
        'Content-Disposition',
        `attachment; filename=${fileName}`,
      );
      response.status(201);
      response.send(zip);
    } catch (e) {
      console.log(e);
      response.status(500).json({
        message: 'SERVER ERROR',
      });
    }
  }
}
