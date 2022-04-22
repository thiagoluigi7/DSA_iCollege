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
import { HouseService } from './house.service';

@Controller('api/v1/house')
@UseGuards(JwtAuthGuard)
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  //Todo: Modify Prisma.HouseCreateInput so it doesn't allow an House to set its own id
  async create(@Body() createHouseDto: Prisma.HouseCreateInput) {
      return this.houseService.create(createHouseDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
      return this.houseService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      const params: Prisma.HouseWhereUniqueInput = {
      id: id,
      };
      return this.houseService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
      @Param('id') id: string,
      @Body() updateHouseDto: Prisma.HouseUpdateInput,
  ) {
      const params = {
      where: {
          id: id,
      } as Prisma.HouseWhereUniqueInput,
      data: updateHouseDto,
      };
      return this.houseService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      const params: Prisma.HouseWhereUniqueInput = {
      id: id,
      };
      return this.houseService.remove(params);
  }
}
