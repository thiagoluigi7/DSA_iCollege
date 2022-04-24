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
import { EventService } from './event.service';

@Controller('api/v1/event')
@UseGuards(JwtAuthGuard)
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  //Todo: Modify Prisma.EventCreateInput so it doesn't allow an Event to set its own id
  async create(@Body() createEventDto: Prisma.EventCreateInput) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
    return this.eventService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const params: Prisma.EventWhereUniqueInput = {
      id: id,
    };
    return this.eventService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: Prisma.EventUpdateInput,
  ) {
    const params = {
      where: {
        id: id,
      } as Prisma.EventWhereUniqueInput,
      data: updateEventDto,
    };
    return this.eventService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const params: Prisma.EventWhereUniqueInput = {
      id: id,
    };
    return this.eventService.remove(params);
  }
}
