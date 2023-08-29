import { Injectable } from '@nestjs/common';
import { S3Service } from './s3.service';

@Injectable()
export class ContentService {
  constructor(private s3: S3Service) {}

  getAllContent(): string {
    return 'get all content';
  }

  getContent(): string {
    return 'get content';
  }

  async createContent(file: Express.Multer.File): Promise<string> {
    return await this.s3.uploadFile(file);
  }

  deleteContent(): string {
    return 'deleted content';
  }

  updateContent(): string {
    return 'update content';
  }
}
