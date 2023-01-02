import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from "class-validator";

export class CreateReportDto {
  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1945)
  @Max(2023)
  year: number;

  @IsNumber()
  @Min(0)
  @Max(500000)
  mileage: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;
}
