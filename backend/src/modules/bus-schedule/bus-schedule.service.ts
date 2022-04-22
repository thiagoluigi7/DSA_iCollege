import { Injectable } from "@nestjs/common";
import { Prisma, BusSchedule } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class BusScheduleService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.BusScheduleCreateInput): Promise<BusSchedule> {
        return this.prismaService.busSchedule.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.BusScheduleWhereUniqueInput;
        where?: Prisma.BusScheduleWhereInput;
        orderBy?: Prisma.BusScheduleOrderByWithRelationInput;
      }): Promise<BusSchedule[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.busSchedule.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        BusScheduleWhereInput: Prisma.BusScheduleWhereUniqueInput,
      ): Promise<BusSchedule | null> {
        return this.prismaService.busSchedule.findUnique({
          where: BusScheduleWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.BusScheduleWhereUniqueInput;
        data: Prisma.BusScheduleUpdateInput;
      }): Promise<BusSchedule> {
        const { where, data } = params;
        return this.prismaService.busSchedule.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.BusScheduleWhereUniqueInput): Promise<BusSchedule> {
        return this.prismaService.busSchedule.delete({
          where,
        });
      }
}