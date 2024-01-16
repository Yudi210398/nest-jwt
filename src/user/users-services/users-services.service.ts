import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterData } from 'src/model/register.shema';

@Injectable()
export class UsersServicesService {
  constructor(
    @InjectModel(RegisterData.name) private dataUser: Model<RegisterData>,
  ) {}

  async getData(): Promise<RegisterData[]> {
    const data = await this.dataUser.find();

    if (data.length === 0)
      throw new HttpException('Data tidak ada', HttpStatus.NOT_FOUND);

    return data;
  }

  async getDataEmail(username: string) {
    const data = this.dataUser.findOne({ email: username });
    if (!data) throw new HttpException('Data tidak ada', HttpStatus.NOT_FOUND);

    return data;
  }
}
