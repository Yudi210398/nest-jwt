import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers/controllers.controller';
import { SerivicesService } from './services/serivices/serivices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterData, RegisterSchema } from 'src/model/register.shema';
import { UsersServicesService } from 'src/user/users-services/users-services.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategis/local.strategy.ts';

@Module({
  imports: [
    PassportModule,
    PassportModule,
    JwtModule.register({
      secret: 'data123',
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([
      { name: RegisterData.name, schema: RegisterSchema },
    ]),
  ],
  controllers: [ControllersController],
  providers: [SerivicesService, UsersServicesService, LocalStrategy],
})
export class AuthModule {}
