import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CourseService } from './course.service';

@Controller('api/v1/course')
@UseGuards(JwtAuthGuard)
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  //Todo: Modify Prisma.CourseCreateInput so it doesn't allow an Course to set its own id
  async create(@Body() createCourseDto: Prisma.CourseCreateInput) {
      return this.courseService.create(createCourseDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
      return this.courseService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      const params: Prisma.CourseWhereUniqueInput = {
      id: id,
      };
      return this.courseService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
      @Param('id') id: string,
      @Body() updateCourseDto: Prisma.CourseUpdateInput,
  ) {
      const params = {
      where: {
          id: id,
      } as Prisma.CourseWhereUniqueInput,
      data: updateCourseDto,
      };
      return this.courseService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      const params: Prisma.CourseWhereUniqueInput = {
      id: id,
      };
      return this.courseService.remove(params);
  }
}
