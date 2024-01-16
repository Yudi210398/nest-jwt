import { Controller, Get } from '@nestjs/common';
import { UsersServicesService } from '../users-services/users-services.service';

@Controller('user')
export class ControllerUserController {
  constructor(private readonly personService: UsersServicesService) {}

  @Get()
  async getUSerAll() {
    return await this.personService.getData();
  }
}
