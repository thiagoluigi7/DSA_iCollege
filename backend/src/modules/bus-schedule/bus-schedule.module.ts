import { Module } from "@nestjs/common";
import { PrismaService } from "../app/prisma.service";
import { BusScheduleController } from "./bus-schedule.controller";
import { BusScheduleService } from "./bus-schedule.service";

@Module({
    controllers: [BusScheduleController],
    providers: [BusScheduleService, PrismaService],
    exports: [BusScheduleService],
})
export class BusScheduleModule {}