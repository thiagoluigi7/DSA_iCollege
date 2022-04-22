import { Injectable } from "@nestjs/common";
import { Prisma, House } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class HouseService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.HouseCreateInput): Promise<House> {
        return this.prismaService.house.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.HouseWhereUniqueInput;
        where?: Prisma.HouseWhereInput;
        orderBy?: Prisma.HouseOrderByWithRelationInput;
      }): Promise<House[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.house.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        HouseWhereInput: Prisma.HouseWhereUniqueInput,
      ): Promise<House | null> {
        return this.prismaService.house.findUnique({
          where: HouseWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.HouseWhereUniqueInput;
        data: Prisma.HouseUpdateInput;
      }): Promise<House> {
        const { where, data } = params;
        return this.prismaService.house.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.HouseWhereUniqueInput): Promise<House> {
        return this.prismaService.house.delete({
          where,
        });
      }
}