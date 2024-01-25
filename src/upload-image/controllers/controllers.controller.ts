import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ServicesService } from '../services/services.service';

@Controller('upload')
export class ControllersController {
  constructor(private readonly uploadService: ServicesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'uploads',
        filename: (req, res, cb) => {
          cb(null, res.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(`uploads/${file.filename}`, `caks`);
    await this.uploadService.deletePath(file.filename);
  }
}
