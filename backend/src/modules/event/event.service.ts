import { Injectable } from "@nestjs/common";
import { Prisma, Event } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class EventService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.EventCreateInput): Promise<Event> {
        return this.prismaService.event.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EventWhereUniqueInput;
        where?: Prisma.EventWhereInput;
        orderBy?: Prisma.EventOrderByWithRelationInput;
      }): Promise<Event[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.event.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        EventWhereInput: Prisma.EventWhereUniqueInput,
      ): Promise<Event | null> {
        return this.prismaService.event.findUnique({
          where: EventWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.EventWhereUniqueInput;
        data: Prisma.EventUpdateInput;
      }): Promise<Event> {
        const { where, data } = params;
        return this.prismaService.event.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.EventWhereUniqueInput): Promise<Event> {
        return this.prismaService.event.delete({
          where,
        });
      }
}