import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  getAllContent(): string {
    return this.contentService.getAllContent();
  }

  @Get(':id')
  getContent(): string {
    return this.contentService.getContent();
  }

  @Post()
  createContent(): string {
    return this.contentService.createContent();
  }

  @Delete(':id')
  deleteContent(): string {
    return this.contentService.deleteContent();
  }

  @Patch(':id')
  updateContent(): string {
    return this.contentService.updateContent();
  }
}
