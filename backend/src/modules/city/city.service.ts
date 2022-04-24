import { Injectable } from '@nestjs/common';
import { Prisma, City } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class CityService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.CityCreateInput): Promise<City> {
    return this.prismaService.city.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CityWhereUniqueInput;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput;
  }): Promise<City[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.city.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    CityWhereInput: Prisma.CityWhereUniqueInput,
  ): Promise<City | null> {
    return this.prismaService.city.findUnique({
      where: CityWhereInput,
    });
  }

  async update(params: {
    where: Prisma.CityWhereUniqueInput;
    data: Prisma.CityUpdateInput;
  }): Promise<City> {
    const { where, data } = params;
    return this.prismaService.city.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.CityWhereUniqueInput): Promise<City> {
    return this.prismaService.city.delete({
      where,
    });
  }
}
