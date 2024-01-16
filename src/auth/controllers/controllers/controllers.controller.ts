import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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
}
