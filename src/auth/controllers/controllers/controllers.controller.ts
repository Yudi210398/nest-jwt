import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SerivicesService } from 'src/auth/services/serivices/serivices.service';
import { RegisterDataDto } from 'src/dto/register.dto';
import { Request } from 'express';
import { LocalGuard } from 'src/auth/guards/local.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('auth')
export class ControllersController {
  constructor(private readonly personService: SerivicesService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createRegister(@Body() person: RegisterDataDto) {
    return this.personService.createUserRegister(person);
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    console.log(req.user['nama'], req.headers.authorization);
    return this.personService.login(req.user);
  }

  @Get('data')
  @UseGuards(JwtAuthGuard)
  dataGet(@Req() req: Request) {
    console.log(req.user, `cak`);
    return req.user;
  }
}
