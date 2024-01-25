import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class ServicesService {
  constructor() {}

  async deletePath(file: string) {
    console.log(`uploads/${file}`);
    return await fs.unlinkSync(`uploads/${file}`);
  }
}
