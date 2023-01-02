import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateCustomerDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
