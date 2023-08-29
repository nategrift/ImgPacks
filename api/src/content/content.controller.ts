import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ContentDto } from './content.dto';

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
  @UseInterceptors(FileInterceptor('file'))
  async createContent(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5000000 }), // 5mb
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() body: ContentDto,
  ) {
    console.log(body);
    return await this.contentService.createContent(file);
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
