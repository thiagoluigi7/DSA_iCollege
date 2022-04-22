import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { UniversityModule } from '../university/university.module';
import { SchollarshipModule } from '../schollarship/schollarship.module';
import { PlaceModule } from '../place/place.module';
import { HouseModule } from '../house/house.module';
import { EventModule } from '../event/event.module';
import { DisciplineModule } from '../discipline/discipline.module';
import { CourseModule } from '../course/course.module';
import { CityModule } from '../city/city.module';
import { BusScheduleModule } from '../bus-schedule/bus-schedule.module';

@Module({
  imports: [
    UserModule, 
    PostModule, 
    UniversityModule, 
    SchollarshipModule, 
    PlaceModule, 
    HouseModule, 
    EventModule, 
    DisciplineModule, 
    CourseModule, 
    CityModule, 
    BusScheduleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
