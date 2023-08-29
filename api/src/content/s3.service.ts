import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
  s3 = new S3({
    forcePathStyle: false,
    endpoint: process.env.AWS_S3_ENDPOINT,
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY,
      secretAccessKey: process.env.AWS_S3_KEY_SECRET,
    },
  });

  async uploadFile(file) {
    const { originalname } = file;

    return await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      originalname,
      file.mimetype,
    );
  }

  private async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
    };

    try {
      await this.s3.send(new PutObjectCommand(params));

      return `successfully uploaded ${bucket}/${String(name)}`;
    } catch (e) {
      console.error(e);
    }
  }
}
