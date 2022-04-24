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
import { UniversityService } from './university.service';

@Controller('api/v1/university')
@UseGuards(JwtAuthGuard)
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  //Todo: Modify Prisma.UniversityCreateInput so it doesn't allow an University to set its own id
  async create(@Body() createUniversityDto: Prisma.UniversityCreateInput) {
    return this.universityService.create(createUniversityDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
    return this.universityService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const params: Prisma.UniversityWhereUniqueInput = {
      id: id,
    };
    return this.universityService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
    @Param('id') id: string,
    @Body() updateUniversityDto: Prisma.UniversityUpdateInput,
  ) {
    const params = {
      where: {
        id: id,
      } as Prisma.UniversityWhereUniqueInput,
      data: updateUniversityDto,
    };
    return this.universityService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const params: Prisma.UniversityWhereUniqueInput = {
      id: id,
    };
    return this.universityService.remove(params);
  }
}
