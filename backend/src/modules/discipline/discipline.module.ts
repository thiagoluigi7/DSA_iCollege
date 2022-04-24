import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { DisciplineController } from './discipline.controller';
import { DisciplineService } from './discipline.service';

@Module({
  controllers: [DisciplineController],
  providers: [DisciplineService, PrismaService],
  exports: [DisciplineService],
})
export class DisciplineModule {}
