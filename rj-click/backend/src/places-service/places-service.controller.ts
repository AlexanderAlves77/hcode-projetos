import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreatePlacesServiceDTO } from './dto/create-placesService.dto';
import { UpdatePlacesServiceDTO } from './dto/update-placesService.dto';
import { PlacesServiceService } from './places-service.service';

@Controller('places-service')
export class PlacesServiceController {
  constructor(private readonly placesServiceService: PlacesServiceService) {}

  @Post()
  async create(@Body() createPlacesServiceDTO: CreatePlacesServiceDTO) {
    return this.placesServiceService.create(createPlacesServiceDTO)
  }

  @Get()
  async findAll() {
    return this.placesServiceService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.placesServiceService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePlacesServiceDTO: UpdatePlacesServiceDTO) {
    return this.placesServiceService.update(id, updatePlacesServiceDTO)
  } 

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.placesServiceService.delete(id)
  }
}
