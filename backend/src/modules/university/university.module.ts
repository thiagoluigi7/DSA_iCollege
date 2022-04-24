import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

@Module({
  controllers: [UniversityController],
  providers: [UniversityService, PrismaService],
  exports: [UniversityService],
})
export class UniversityModule {}
