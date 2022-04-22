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
import { PlaceService } from './place.service';

@Controller('api/v1/Place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  //Todo: Modify Prisma.PlaceCreateInput so it doesn't allow an Place to set its own id
  async create(@Body() createPlaceDto: Prisma.PlaceCreateInput) {
      return this.placeService.create(createPlaceDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
      return this.placeService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      const params: Prisma.PlaceWhereUniqueInput = {
      id: id,
      };
      return this.placeService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
      @Param('id') id: string,
      @Body() updatePlaceDto: Prisma.PlaceUpdateInput,
  ) {
      const params = {
      where: {
          id: id,
      } as Prisma.PlaceWhereUniqueInput,
      data: updatePlaceDto,
      };
      return this.placeService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      const params: Prisma.PlaceWhereUniqueInput = {
      id: id,
      };
      return this.placeService.remove(params);
  }
}
