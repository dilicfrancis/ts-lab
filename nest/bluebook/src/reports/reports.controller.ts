import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CurrentCustomer } from "../customers/decorators/current-customer.decorator";
import { Customer } from "../customers/entities/customer.entity";
import { AuthGuard } from "../guards/auth.guard";
import { Serialize } from "../interceptors/serialize.interceptor";
import { CreateReportDto } from "./dtos/create-report-dto";
import { ReportsService } from "./reports.service";
import { ReportDto } from "./dtos/report.dto";
import { ApproveReportDto } from "./dtos/approve-report.dto";
import { ModeratorGuard } from "../guards/moderator.guard";
import { GetEstimateDto } from "./dtos/get-estimate.dto";

@Controller("reports")
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(
    @Body() body: CreateReportDto,
    @CurrentCustomer() customer: Customer,
  ) {
    return this.reportsService.create(body, customer);
  }

  @Patch("/:id")
  @UseGuards(ModeratorGuard)
  approveReport(@Param("id") id: string, @Body() body: ApproveReportDto) {
    return this.reportsService.changeApproval(id, body.approved);
  }

  @Get()
  getEstimate(@Query() query: GetEstimateDto) {
    return this.reportsService.generateEstimate(query);
  }
}
