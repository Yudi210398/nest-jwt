import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.USERNAMEDATA}:${process.env.PASSWORD_DATABASE}@cluster0-shard-00-00.oaqmd.mongodb.net:27017,cluster0-shard-00-01.oaqmd.mongodb.net:27017,cluster0-shard-00-02.oaqmd.mongodb.net:27017/nestJsJWT?ssl=true&replicaSet=atlas-myi90d-shard-0&authSource=admin&retryWrites=true&w=majority`,
    ),
    AuthModule,
  ],
})
export class AppModule {}
