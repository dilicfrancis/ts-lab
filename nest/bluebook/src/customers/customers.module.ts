import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { Customer } from "./entities/customer.entity";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";
//import { CurrentCustomerInterceptor } from "./interceptors/current-customer.interceptor";
//import { APP_INTERCEPTOR } from "@nestjs/core";
import { CurrentCustomerMiddleware } from "./middlewares/current-customer.middleware";

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    AuthService,
    //{ provide: APP_INTERCEPTOR, useClass: CurrentCustomerInterceptor },
  ],
})
export class CustomersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentCustomerMiddleware).forRoutes("*");
  }
}
