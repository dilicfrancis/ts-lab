import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { randomBytes, scrypt as scrypt_cb } from "crypto";
import { promisify } from "util";
import { CustomersService } from "./customers.service";

const scrypt = promisify(scrypt_cb);

@Injectable()
export class AuthService {
  constructor(private customersService: CustomersService) {}

  async signUp(email: string, password: string) {
    const customers = await this.customersService.find(email);
    if (customers.length)
      throw new BadRequestException("This email is already taken.");

    const salt = randomBytes(16).toString("hex");
    const hash = (await scrypt(password, salt, 64)) as Buffer;
    const hashedPassword = `${salt}.${hash.toString("hex")}`;

    const customer = await this.customersService.create(email, hashedPassword);

    return customer;
  }

  async signIn(email: string, password: string) {
    const [customer] = await this.customersService.find(email);
    if (!customer) throw new NotFoundException("Invalid SignIn");

    const [salt, storedHash] = customer.password.split(".");
    const hash = (await scrypt(password, salt, 64)) as Buffer;
    if (hash.toString("hex") !== storedHash)
      throw new BadRequestException("Invalid SignIn");
    return customer;
  }
}
