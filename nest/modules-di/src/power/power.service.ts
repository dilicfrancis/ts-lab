import { Injectable } from "@nestjs/common";

@Injectable()
export class PowerService {
  supplyPower(kWh: number) {
    console.log(`Providing ${kWh} KWh of power right now.`);
  }
}
