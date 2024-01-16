import { Module } from '@nestjs/common';
import { UsersServicesService } from './users-services/users-services.service';
import { ControllerUserController } from './controller-user/controller-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterData, RegisterSchema } from 'src/model/register.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegisterData.name, schema: RegisterSchema },
    ]),
  ],
  controllers: [ControllerUserController],
  providers: [UsersServicesService],
})
export class UserModule {}
