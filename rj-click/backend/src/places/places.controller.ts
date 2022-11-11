import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreatePlacesDTO } from './dto/create-places.dto';
import { UpdatePlacesDTO } from './dto/update-places.dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  // Cria um novo lugar
  @Post()
  async create(@Body() createPlacesDTO: CreatePlacesDTO) {
    return this.placesService.create(createPlacesDTO);
  }

  // Retorna todos os lugares
  @Get()
  async findAll() {
    return this.placesService.findAll();
  }

  // Retorna um único lugar
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.placesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, 
  @Body() updatePlacesDTO: UpdatePlacesDTO) {
    return this.placesService.update(id, updatePlacesDTO);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.placesService.delete(id);
  }
}