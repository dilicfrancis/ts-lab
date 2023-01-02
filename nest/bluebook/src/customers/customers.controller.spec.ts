import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";
import { Customer } from "./entities/customer.entity";

describe("CustomersController", () => {
  let controller: CustomersController;
  let fakeCustomersService: Partial<CustomersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeAuthService = {
      // signUp: () => {},
      signIn: (email: string, password: string) =>
        Promise.resolve({ id: 673, email, password } as Customer),
    };
    fakeCustomersService = {
      find: (email: string) =>
        Promise.resolve([{ id: 34, email, password: "6793bd" } as Customer]),
      findOne: (id: number) =>
        Promise.resolve({
          id,
          email: "pooky@hounds.io",
          password: "secretPooky",
        } as Customer),
      // remove: () => {},
      // update: () => {},
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [
        { provide: CustomersService, useValue: fakeCustomersService },
        { provide: AuthService, useValue: fakeAuthService },
      ],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("finds all customers with a provided email", async () => {
    const customer = await controller.findAllCustomers("pookie@email.com");
    expect(customer.length).toEqual(1);
    expect(customer[0].email).toEqual("pookie@email.com");
  });

  it("returns a customer with the provided id", async () => {
    const customer = await controller.findCustomer("56");
    expect(customer).toBeDefined();
  });

  it("throws an error if the customer id does not exist", async () => {
    fakeCustomersService.findOne = () => null;
    await expect(controller.findCustomer("239")).rejects.toThrow(
      NotFoundException,
    );
  });

  it("updates the session object and returns the customer id", async () => {
    const session = { customerID: -1 };
    const customer = await controller.fetchCustomer(
      {
        id: 43,
        email: "pooky@email.com",
        password: "secretPooks",
      } as Customer,
      session,
    );

    expect(customer.id).toEqual(673);
    expect(session.customerID).toEqual(673);
  });
});
