import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [CategoriesModule, UsersModule, PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
