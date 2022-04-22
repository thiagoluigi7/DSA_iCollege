import { Injectable } from "@nestjs/common";
import { Prisma, Course } from "@prisma/client";
import { PrismaService } from "../app/prisma.service";


@Injectable()
export class CourseService {
    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.CourseCreateInput): Promise<Course> {
        return this.prismaService.course.create({ data });
      }
    
      async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CourseWhereUniqueInput;
        where?: Prisma.CourseWhereInput;
        orderBy?: Prisma.CourseOrderByWithRelationInput;
      }): Promise<Course[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaService.course.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async findOne(
        CourseWhereInput: Prisma.CourseWhereUniqueInput,
      ): Promise<Course | null> {
        return this.prismaService.course.findUnique({
          where: CourseWhereInput,
        });
      }
    
      async update(params: {
        where: Prisma.CourseWhereUniqueInput;
        data: Prisma.CourseUpdateInput;
      }): Promise<Course> {
        const { where, data } = params;
        return this.prismaService.course.update({
          data,
          where,
        });
      }
    
      async remove(where: Prisma.CourseWhereUniqueInput): Promise<Course> {
        return this.prismaService.course.delete({
          where,
        });
      }
}