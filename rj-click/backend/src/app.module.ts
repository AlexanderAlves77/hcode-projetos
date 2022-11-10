import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { PlacesServiceModule } from './places-service/places-service.module';

@Module({
  imports: [CategoriesModule, UsersModule, PlacesModule, PlacesServiceModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
