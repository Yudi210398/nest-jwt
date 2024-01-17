import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDataDto } from 'src/dto/register.dto';
import { RegisterData } from 'src/model/register.shema';
import * as bcrypt from 'bcrypt';
import { UsersServicesService } from 'src/user/users-services/users-services.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SerivicesService {
  constructor(
    @InjectModel(RegisterData.name) private dataCustomer: Model<RegisterData>,
    private readonly userService: UsersServicesService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.getDataEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      return await user;
    }

    return null;
  }

  async createUserRegister({ nama, email, umur, password }: RegisterDataDto) {
    const data = await new this.dataCustomer({
      nama,
      email,
      umur,
      password: await bcrypt.hash(password, 10),
    });
    return await data.save();
  }

  async login(user) {
    const payload = {
      email: user.email,
      nama: user.nama,
      id: user?._id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
