import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { SchollarshipController } from './schollarship.controller';
import { SchollarshipService } from './schollarship.service';

@Module({
  controllers: [SchollarshipController],
  providers: [SchollarshipService, PrismaService],
  exports: [SchollarshipService],
})
export class SchollarshipModule {}
