import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(public repository: MessagesRepository) {}

  fetchOne(id: string) {
    return this.repository.fetchOne(id);
  }

  fetchAll() {
    return this.repository.fetchAll();
  }

  add(message: string) {
    return this.repository.add(message);
  }
}
