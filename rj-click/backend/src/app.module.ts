import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { PlacesServiceModule } from './places-service/places-service.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoriesModule, UsersModule, PlacesModule, PlacesServiceModule, PrismaModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
