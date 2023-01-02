import { Expose } from "class-transformer";

export class CustomerDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
