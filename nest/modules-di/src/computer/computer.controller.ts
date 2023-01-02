import { Controller, Get } from "@nestjs/common";
import { CpuService } from "src/cpu/cpu.service";
import { DiskService } from "src/disk/disk.service";

@Controller("computer")
export class ComputerController {
  constructor(private compute: CpuService, private disk: DiskService) {}

  @Get("/")
  run() {
    return `${this.compute.compute(2, 3)} and ${this.disk.getData()}`;
  }
}
