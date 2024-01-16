import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SerivicesService } from 'src/auth/services/serivices/serivices.service';
import { RegisterDataDto } from 'src/dto/register.dto';

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
  login(@Body() username: string, password: string) {
    const data = this.personService.validateUser(username, password);
    return data;
  }
}
