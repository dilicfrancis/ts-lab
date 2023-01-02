import { CanActivate, ExecutionContext } from "@nestjs/common";

export class ModeratorGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.currentCustomer) return false;

    return request.currentCustomer.moderator;
  }
}
