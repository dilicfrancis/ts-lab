import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Session,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Serialize } from "../interceptors/serialize.interceptor";
import { AuthService } from "./auth.service";
import { CustomersService } from "./customers.service";
import { CurrentCustomer } from "./decorators/current-customer.decorator";
import { CreateCustomerDto } from "./dtos/create-customer.dto";
import { CustomerDto } from "./dtos/customer.dto";
import { UpdateCustomerDto } from "./dtos/update-customer.dto";
import { Customer } from "./entities/customer.entity";

@Controller("auth")
@Serialize(CustomerDto)
export class CustomersController {
  constructor(
    private authService: AuthService,
    private customerService: CustomersService,
  ) {}

  // @Get("/shade/:color")
  // setShade(@Param("color") color: string, @Session() session: any) {
  //   session.color = color;
  // }

  // @Get("/shade")
  // getShade(@Session() session: any) {
  //   return session.color;
  // }

  @Post("/signup")
  async createCustomer(
    @Body() body: CreateCustomerDto,
    @Session() session: any,
  ) {
    const customer = await this.authService.signUp(body.email, body.password);
    session.customerID = customer.id;
    return customer;
  }

  @Post("/signin")
  async fetchCustomer(
    @Body() body: CreateCustomerDto,
    @Session() session: any,
  ) {
    const customer = await this.authService.signIn(body.email, body.password);
    session.customerID = customer.id;
    return customer;
  }

  // @Get("/printcustomer")
  // printCustomer(@Session() session: any) {
  //   return this.customerService.findOne(session.customerID);
  // }

  @Get("/printcustomer")
  @UseGuards(AuthGuard)
  printCustomer(@CurrentCustomer() customer: Customer) {
    return customer;
  }

  @Post("/signout")
  signCustomerOut(@Session() session: any) {
    session.customerID = null;
    return "Successfully signed out";
  }

  @Get("/:id")
  async findCustomer(@Param("id") id: string) {
    const customer = await this.customerService.findOne(parseInt(id));
    if (!customer) throw new NotFoundException("This record does not exist");
    return customer;
  }

  @Get()
  findAllCustomers(@Query("email") email: string) {
    return this.customerService.find(email);
  }

  @Patch("/:id")
  updateCustomer(@Param("id") id: string, @Body() body: UpdateCustomerDto) {
    return this.customerService.update(parseInt(id), body);
  }

  @Delete("/:id")
  deleteCustomer(@Param("id") id: string) {
    return this.customerService.remove(parseInt(id));
  }
}
