import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/entry")
  getEntryRoute() {
    return "Here.";
  }

  @Get("/exit")
  getExitRoute() {
    return "Left.";
  }
}
