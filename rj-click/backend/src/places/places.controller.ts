import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  async create(@Body() name: string) {
    return this.placesService.create(name)
  }

  @Get()
  async findAll() {
    return this.placesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.placesService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() name: string) {
    return this.placesService.update(id, name)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.placesService.delete(id)
  }
}
