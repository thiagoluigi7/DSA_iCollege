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
import { DisciplineService } from './discipline.service';

@Controller('api/v1/discipline')
@UseGuards(JwtAuthGuard)
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Post()
  //Todo: Modify Prisma.DisciplineCreateInput so it doesn't allow an Discipline to set its own id
  async create(@Body() createDisciplineDto: Prisma.DisciplineCreateInput) {
      return this.disciplineService.create(createDisciplineDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
      return this.disciplineService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      const params: Prisma.DisciplineWhereUniqueInput = {
      id: id,
      };
      return this.disciplineService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
      @Param('id') id: string,
      @Body() updateDisciplineDto: Prisma.DisciplineUpdateInput,
  ) {
      const params = {
      where: {
          id: id,
      } as Prisma.DisciplineWhereUniqueInput,
      data: updateDisciplineDto,
      };
      return this.disciplineService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      const params: Prisma.DisciplineWhereUniqueInput = {
      id: id,
      };
      return this.disciplineService.remove(params);
  }
}
