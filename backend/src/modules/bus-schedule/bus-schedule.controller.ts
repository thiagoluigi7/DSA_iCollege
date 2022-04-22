import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BusScheduleService } from './bus-schedule.service';

@Controller('api/v1/BusSchedule')
export class BusScheduleController {
  constructor(private readonly busScheduleService: BusScheduleService) {}

  @Post()
  //Todo: Modify Prisma.BusScheduleCreateInput so it doesn't allow an BusSchedule to set its own id
  async create(@Body() createBusScheduleDto: Prisma.BusScheduleCreateInput) {
      return this.busScheduleService.create(createBusScheduleDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
      return this.busScheduleService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      const params: Prisma.BusScheduleWhereUniqueInput = {
      id: id,
      };
      return this.busScheduleService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
      @Param('id') id: string,
      @Body() updateBusScheduleDto: Prisma.BusScheduleUpdateInput,
  ) {
      const params = {
      where: {
          id: id,
      } as Prisma.BusScheduleWhereUniqueInput,
      data: updateBusScheduleDto,
      };
      return this.busScheduleService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      const params: Prisma.BusScheduleWhereUniqueInput = {
      id: id,
      };
      return this.busScheduleService.remove(params);
  }
}
