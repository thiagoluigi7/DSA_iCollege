import { Injectable } from "@nestjs/common";
import { Prisma, Schollarship } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class SchollarshipService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.SchollarshipCreateInput): Promise<Schollarship> {
        return this.prismaService.schollarship.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SchollarshipWhereUniqueInput;
        where?: Prisma.SchollarshipWhereInput;
        orderBy?: Prisma.SchollarshipOrderByWithRelationInput;
      }): Promise<Schollarship[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.schollarship.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        SchollarshipWhereInput: Prisma.SchollarshipWhereUniqueInput,
      ): Promise<Schollarship | null> {
        return this.prismaService.schollarship.findUnique({
          where: SchollarshipWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.SchollarshipWhereUniqueInput;
        data: Prisma.SchollarshipUpdateInput;
      }): Promise<Schollarship> {
        const { where, data } = params;
        return this.prismaService.schollarship.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.SchollarshipWhereUniqueInput): Promise<Schollarship> {
        return this.prismaService.schollarship.delete({
          where,
        });
      }
}