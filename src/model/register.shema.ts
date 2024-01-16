import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RegisterData {
  @Prop({ required: true })
  nama: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  umur: number;

  @Prop({ required: true })
  password: string;
}

export const RegisterSchema = SchemaFactory.createForClass(RegisterData);
