import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getAllContent(): string {
    return 'get all content';
  }

  getContent(): string {
    return 'get content';
  }

  createContent(): string {
    return 'created content';
  }

  deleteContent(): string {
    return 'deleted content';
  }

  updateContent(): string {
    return 'update content';
  }
}
