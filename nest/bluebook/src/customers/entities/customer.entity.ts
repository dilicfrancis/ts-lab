import { Report } from "../../reports/entities/report.entity";
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  moderator: boolean;

  @OneToMany(() => Report, (reports) => reports.customer)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log(`Added: ${this.email}`);
  }

  @AfterRemove()
  logRemoval() {
    console.log(`Removed: ${this.email}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated: ${this.email}`);
  }
}
