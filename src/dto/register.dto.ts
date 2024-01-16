import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterDataDto {
  @IsNotEmpty({ message: 'Tidak Boleh kosongs' })
  nama: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosonga' })
  @IsEmail({}, { message: 'email tidak ada' })
  email: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosongc' })
  @IsNumber({}, { message: 'umur Harus Beruapa Angka' })
  umur: number;

  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  password: string;
}
