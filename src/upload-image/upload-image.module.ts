import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers.controller';
import { ServicesService } from './services/services.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({ dest: '../../uploads' })],
  controllers: [ControllersController],
  providers: [ServicesService],
})
export class UploadImageModule {}
