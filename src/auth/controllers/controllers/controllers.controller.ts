import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SerivicesService } from 'src/auth/services/serivices/serivices.service';
import { RegisterDataDto } from 'src/dto/register.dto';
import { Request } from 'express';

@Controller('auth')
export class ControllersController {
  constructor(private readonly personService: SerivicesService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createRegister(@Body() person: RegisterDataDto) {
    return this.personService.createUserRegister(person);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req: Request) {
    return this.personService.login(req.user);
  }
}
