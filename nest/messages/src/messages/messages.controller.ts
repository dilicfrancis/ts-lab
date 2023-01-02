import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.services";

@Controller("messages")
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messageService.fetchAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return this.messageService.add(body.content);
  }

  @Get("/:id")
  async getMessage(@Param("id") id: string) {
    console.log(id);

    const result = await this.messageService.fetchOne(id);

    if (!result) throw new NotFoundException("message does not exist");

    return result;
  }
}
