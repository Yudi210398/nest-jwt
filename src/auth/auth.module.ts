import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers/controllers.controller';
import { SerivicesService } from './services/serivices/serivices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterData, RegisterSchema } from 'src/model/register.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegisterData.name, schema: RegisterSchema },
    ]),
  ],
  controllers: [ControllersController],
  providers: [SerivicesService],
})
export class AuthModule {}
