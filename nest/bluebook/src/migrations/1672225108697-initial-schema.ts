import { MigrationInterface, QueryRunner } from "typeorm";

export class initialSchema1672225108697 implements MigrationInterface {
    name = 'initialSchema1672225108697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "report" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "price" integer NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "year" integer NOT NULL, "lng" integer NOT NULL, "lat" integer NOT NULL, "mileage" integer NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "customerId" integer)`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "moderator" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`CREATE TABLE "temporary_report" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "price" integer NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "year" integer NOT NULL, "lng" integer NOT NULL, "lat" integer NOT NULL, "mileage" integer NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "customerId" integer, CONSTRAINT "FK_af0ab438a1e8dc4878cdc44948e" FOREIGN KEY ("customerId") REFERENCES "customer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_report"("id", "price", "make", "model", "year", "lng", "lat", "mileage", "approved", "customerId") SELECT "id", "price", "make", "model", "year", "lng", "lat", "mileage", "approved", "customerId" FROM "report"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`ALTER TABLE "temporary_report" RENAME TO "report"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" RENAME TO "temporary_report"`);
        await queryRunner.query(`CREATE TABLE "report" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "price" integer NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "year" integer NOT NULL, "lng" integer NOT NULL, "lat" integer NOT NULL, "mileage" integer NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "customerId" integer)`);
        await queryRunner.query(`INSERT INTO "report"("id", "price", "make", "model", "year", "lng", "lat", "mileage", "approved", "customerId") SELECT "id", "price", "make", "model", "year", "lng", "lat", "mileage", "approved", "customerId" FROM "temporary_report"`);
        await queryRunner.query(`DROP TABLE "temporary_report"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "report"`);
    }

}
