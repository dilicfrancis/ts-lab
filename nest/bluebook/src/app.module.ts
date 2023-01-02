import { MiddlewareConsumer, Module, ValidationPipe } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { Customer } from "./customers/entities/customer.entity";
import { CustomersModule } from "./customers/customers.module";
// import { Report } from "./reports/entities/report.entity";
import { ReportsModule } from "./reports/reports.module";
import { APP_PIPE } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmConfigService } from "./config/typeorm.config";

const cookieSession = require("cookie-session");
// const dbConfig = require("../ormconfig.js");

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: "sqlite",
    //   database: "db.sqlite",
    //   entities: [Customer, Report],
    //   synchronize: true,
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    // TypeOrmModule.forRoot(dbConfig),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       type: "sqlite",
    //       database: config.get<string>("DATABASE"),
    //       entities: [Customer, Report],
    //       synchronize: true,
    //     };
    //   },
    // }),
    CustomersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
  ],
})
export class AppModule {
  constructor(private configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: [this.configService.get("COOKIE_KEY")],
        }),
      )
      .forRoutes("*");
  }
}
