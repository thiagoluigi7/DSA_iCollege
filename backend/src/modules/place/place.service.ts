import { Injectable } from "@nestjs/common";
import { Prisma, Place } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class PlaceService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.PlaceCreateInput): Promise<Place> {
        return this.prismaService.place.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PlaceWhereUniqueInput;
        where?: Prisma.PlaceWhereInput;
        orderBy?: Prisma.PlaceOrderByWithRelationInput;
      }): Promise<Place[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.place.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        PlaceWhereInput: Prisma.PlaceWhereUniqueInput,
      ): Promise<Place | null> {
        return this.prismaService.place.findUnique({
          where: PlaceWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.PlaceWhereUniqueInput;
        data: Prisma.PlaceUpdateInput;
      }): Promise<Place> {
        const { where, data } = params;
        return this.prismaService.place.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.PlaceWhereUniqueInput): Promise<Place> {
        return this.prismaService.place.delete({
          where,
        });
      }
}