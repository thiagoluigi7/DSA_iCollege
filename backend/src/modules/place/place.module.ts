import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  controllers: [PlaceController],
  providers: [PlaceService, PrismaService],
  exports: [PlaceService],
})
export class PlaceModule {}
