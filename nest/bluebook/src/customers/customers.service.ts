import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Customer } from "./entities/customer.entity";

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private repository: Repository<Customer>,
  ) {}
  create(email: string, password: string) {
    const customer = this.repository.create({ email, password });
    return this.repository.save(customer);
  }

  findOne(id: number) {
    if (!id) return null;
    return this.repository.findOneBy({ id });
  }

  find(email: string) {
    return this.repository.find({ where: { email } });
  }

  async update(id: number, attrs: Partial<Customer>) {
    const customer = await this.findOne(id);
    if (!customer) throw new NotFoundException("This record does not exist");
    Object.assign(customer, attrs);
    return this.repository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    if (!customer) throw new NotFoundException("This record does not exist");
    return this.repository.remove(customer);
  }
}
