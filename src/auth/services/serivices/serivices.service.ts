import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDataDto } from 'src/dto/register.dto';
import { RegisterData } from 'src/model/register.shema';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SerivicesService {
  constructor(
    @InjectModel(RegisterData.name) private dataCustomer: Model<RegisterData>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.dataCustomer.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      const payload = {
        email: user.email,
        nama: user.nama,
        id: user?._id,
      };

      user.refreshToken = await this.jwtService.sign(payload, {
        expiresIn: '5m',
      });

      return await user;
    }
    return null;
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

  async createUserRegister({ nama, email, umur, password }: RegisterDataDto) {
    const data = await new this.dataCustomer({
      nama,
      email,
      umur,
      password: await bcrypt.hash(password, 10),
    });
    return await data.save();
  }

  async getDataid(id: string) {
    return await this.dataCustomer.findById(id);
  }

  async refreshToken(userid: string) {
    const cariUser = (await this.dataCustomer.find()).filter((data) => {
      return data?._id?.toString() === userid;
    });
    if (cariUser.length === 0)
      throw new HttpException('data tidak ditemukan', HttpStatus.NOT_FOUND);

    const token = cariUser[0].refreshToken;

    try {
      const decoded = await this.jwtService.verify(token);

      if (!decoded)
        throw new HttpException('Token sudah kadaluarsa', HttpStatus.NOT_FOUND);

      const payload = {
        email: cariUser[0].email,
        nama: cariUser[0].nama,
        id: cariUser[0]._id,
      };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new HttpException('Token sudah kadaluarsa', HttpStatus.NOT_FOUND);
    }
  }
}
