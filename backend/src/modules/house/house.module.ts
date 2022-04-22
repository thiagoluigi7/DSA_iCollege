import { Module } from "@nestjs/common";
import { PrismaService } from "../app/prisma.service";
import { HouseController } from "./house.controller";
import { HouseService } from "./house.service";

@Module({
    controllers: [HouseController],
    providers: [HouseService, PrismaService],
    exports: [HouseService],
})
export class HouseModule {}