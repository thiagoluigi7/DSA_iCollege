import { Injectable } from "@nestjs/common";
import { Prisma, Discipline } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class DisciplineService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.DisciplineCreateInput): Promise<Discipline> {
        return this.prismaService.discipline.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DisciplineWhereUniqueInput;
        where?: Prisma.DisciplineWhereInput;
        orderBy?: Prisma.DisciplineOrderByWithRelationInput;
      }): Promise<Discipline[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.discipline.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        DisciplineWhereInput: Prisma.DisciplineWhereUniqueInput,
      ): Promise<Discipline | null> {
        return this.prismaService.discipline.findUnique({
          where: DisciplineWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.DisciplineWhereUniqueInput;
        data: Prisma.DisciplineUpdateInput;
      }): Promise<Discipline> {
        const { where, data } = params;
        return this.prismaService.discipline.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.DisciplineWhereUniqueInput): Promise<Discipline> {
        return this.prismaService.discipline.delete({
          where,
        });
      }
}