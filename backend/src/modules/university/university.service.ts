import { Injectable } from '@nestjs/common';
import { Prisma, University } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class UniversityService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.UniversityCreateInput): Promise<University> {
    return this.prismaService.university.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UniversityWhereUniqueInput;
    where?: Prisma.UniversityWhereInput;
    orderBy?: Prisma.UniversityOrderByWithRelationInput;
  }): Promise<University[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.university.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    UniversityWhereInput: Prisma.UniversityWhereUniqueInput,
  ): Promise<University | null> {
    return this.prismaService.university.findUnique({
      where: UniversityWhereInput,
    });
  }

  async update(params: {
    where: Prisma.UniversityWhereUniqueInput;
    data: Prisma.UniversityUpdateInput;
  }): Promise<University> {
    const { where, data } = params;
    return this.prismaService.university.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UniversityWhereUniqueInput): Promise<University> {
    return this.prismaService.university.delete({
      where,
    });
  }
}
