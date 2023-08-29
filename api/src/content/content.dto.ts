import { IsNotEmpty } from 'class-validator';

export class ContentDto {
  @IsNotEmpty()
  title!: string;
  prompt: string;
  engine: string;
  location: string;
  isUnlisted: boolean;
}
