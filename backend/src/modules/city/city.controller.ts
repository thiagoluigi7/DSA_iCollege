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
import { CityService } from './city.service';

@Controller('api/v1/City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  //Todo: Modify Prisma.CityCreateInput so it doesn't allow an City to set its own id
  async create(@Body() createCityDto: Prisma.CityCreateInput) {
      return this.cityService.create(createCityDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
      return this.cityService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      const params: Prisma.CityWhereUniqueInput = {
      id: id,
      };
      return this.cityService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
      @Param('id') id: string,
      @Body() updateCityDto: Prisma.CityUpdateInput,
  ) {
      const params = {
      where: {
          id: id,
      } as Prisma.CityWhereUniqueInput,
      data: updateCityDto,
      };
      return this.cityService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      const params: Prisma.CityWhereUniqueInput = {
      id: id,
      };
      return this.cityService.remove(params);
  }
}
