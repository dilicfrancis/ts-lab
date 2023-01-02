import { BadRequestException, NotFoundException } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { CustomersService } from "./customers.service";
import { Customer } from "./entities/customer.entity";

describe("AuthService", () => {
  let service: AuthService;
  let fakeCustomersService: Partial<CustomersService>;

  beforeEach(async () => {
    const customers: Customer[] = [];
    fakeCustomersService = {
      find: (email: string) => {
        const filteredCustomers = customers.filter(
          (customer) => customer.email === email,
        );
        return Promise.resolve(filteredCustomers);
      },
      create: (email: string, password: string) => {
        const customer = {
          id: Math.floor(Math.random() * 329392),
          email,
          password,
        } as Customer;
        customers.push(customer);
        return Promise.resolve(customer);
      },
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: CustomersService, useValue: fakeCustomersService },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it("can create an instance of auth service", async () => {
    expect(service).toBeDefined();
  });

  it("creates a new customer with a salted and hashed password", async () => {
    const customer = await service.signUp("pooky@hounds.com", "secretpassword");
    expect(customer.password).not.toEqual("secretpassword");

    const [salt, hash] = customer.password.split(".");
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it("throws an error if the customer signs up with an email that is already in use", async () => {
    await service.signUp("pooky@hound.com", "pookySecret");
    await expect(
      service.signUp("pooky@hound.com", "pookySecret"),
    ).rejects.toThrow(BadRequestException);
  });

  it("throws an error is a customer tries to signin with an unregistered email", async () => {
    await expect(
      service.signIn("pooky@hound.com", "pookySecret"),
    ).rejects.toThrow(NotFoundException);
  });

  it("throws an error if an invalid password is provided", async () => {
    await service.signUp("pooky@hound.com", "pookySecret");
    await expect(
      service.signIn("pooky@hound.com", "wrongPookySecret"),
    ).rejects.toThrow(BadRequestException);
  });

  it("returns a customer when credentials are correct", async () => {
    await service.signUp("pooky@hound.com", "pookySecret");

    const customer = await service.signIn("pooky@hound.com", "pookySecret");
    expect(customer).toBeDefined();
  });
});
