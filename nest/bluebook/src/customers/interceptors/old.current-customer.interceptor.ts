import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { CustomersService } from "../customers.service";

@Injectable()
export class CurrentCustomerInterceptor implements NestInterceptor {
  constructor(private customersService: CustomersService) {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { customerID } = request.session || {};

    if (customerID) {
      const customer = await this.customersService.findOne(customerID);
      request.currentCustomer = customer;
    }

    return handler.handle();
  }
}
