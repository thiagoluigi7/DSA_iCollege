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
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  //Todo: Modify Prisma.UserCreateInput so it doesn't allow an user to set its own id
  async create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  //Todo: Make type interface for params
  async findAll(@Body() params) {
    return this.usersService.findAll(params);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    const params: Prisma.UserWhereUniqueInput = {
      id: id,
    };
    return this.usersService.findOne(params);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  //Todo: Make type interface for params
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    const params = {
      where: {
        id: id,
      } as Prisma.UserWhereUniqueInput,
      data: updateUserDto,
    };
    return this.usersService.update(params);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const params: Prisma.UserWhereUniqueInput = {
      id: id,
    };
    return this.usersService.remove(params);
  }
}
