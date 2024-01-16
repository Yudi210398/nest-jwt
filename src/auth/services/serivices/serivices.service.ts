import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDataDto } from 'src/dto/register.dto';
import { RegisterData } from 'src/model/register.shema';

@Injectable()
export class SerivicesService {
  constructor(
    @InjectModel(RegisterData.name) private dataCustomer: Model<RegisterData>,
  ) {}

  async createUserRegister(person: RegisterDataDto) {
    const data = await new this.dataCustomer(person);
    return await data.save();
  }
}
