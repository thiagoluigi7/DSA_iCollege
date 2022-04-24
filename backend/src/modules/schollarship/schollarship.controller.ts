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
import { SchollarshipService } from './schollarship.service';

@Controller('api/v1/schollarship')
@UseGuards(JwtAuthGuard)
export class SchollarshipController {
  constructor(private readonly schollarshipService: SchollarshipService) {}

  @Post()
  //Todo: Modify Prisma.SchollarshipCreateInput so it doesn't allow an Schollarship to set its own id
  async create(@Body() createSchollarshipDto: Prisma.SchollarshipCreateInput) {
    return this.schollarshipService.create(createSchollarshipDto);
  }

  @Get()
  //Todo: Make type interface for params
  async findAll(@Body() params) {
    return this.schollarshipService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const params: Prisma.SchollarshipWhereUniqueInput = {
      id: id,
    };
    return this.schollarshipService.findOne(params);
  }

  @Patch(':id')
  //Todo: Make type interface for params
  async update(
    @Param('id') id: string,
    @Body() updateSchollarshipDto: Prisma.SchollarshipUpdateInput,
  ) {
    const params = {
      where: {
        id: id,
      } as Prisma.SchollarshipWhereUniqueInput,
      data: updateSchollarshipDto,
    };
    return this.schollarshipService.update(params);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const params: Prisma.SchollarshipWhereUniqueInput = {
      id: id,
    };
    return this.schollarshipService.remove(params);
  }
}
