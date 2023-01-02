import { Customer } from "../../customers/entities/customer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @Column({ default: false })
  approved: boolean;

  @ManyToOne(() => Customer, (customer) => customer.reports)
  customer: Customer;
}
