import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { CustomersService } from "../customers.service";
import { Customer } from "../entities/customer.entity";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      currentCustomer?: Customer;
    }
  }
}

declare module "express-session" {
  export interface SessionData {
    customerID: number;
  }
}

@Injectable()
export class CurrentCustomerMiddleware implements NestMiddleware {
  constructor(private customersService: CustomersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { customerID } = req.session || {};

    if (customerID) {
      const customer = await this.customersService.findOne(customerID);
      req.currentCustomer = customer;

      next();
    }
  }
}
