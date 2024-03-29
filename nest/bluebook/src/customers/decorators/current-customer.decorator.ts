import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentCustomer = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentCustomer;
  },
);
