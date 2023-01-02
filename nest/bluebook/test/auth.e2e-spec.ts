import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("Authentication System (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("handles a signup request", () => {
    const email = "pooky@hounds.com";
    return request(app.getHttpServer())
      .post("/auth/signup")
      .send({ email, password: "secretPass" })
      .expect(201)
      .then((response) => {
        const { id, email } = response.body;
        expect(id).toBeDefined();
        expect(email).toEqual(email);
      });
  });

  it("signs up a customer and returns the logged in customer", async () => {
    const email = "pooky@hounds.org";

    const response = await request(app.getHttpServer())
      .post("/auth/signup")
      .send({ email, password: "spooky" })
      .expect(201);

    const cookie = response.get("Set-Cookie");

    const { body } = await request(app.getHttpServer())
      .get("/auth/printcustomer")
      .set("Cookie", cookie)
      .expect(200);

    expect(body.email).toEqual(email);
  });
});
