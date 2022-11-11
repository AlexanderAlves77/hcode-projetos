import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDTO } from './dto/createCategories.dto';
import { UpdateCategoriesDTO } from './dto/updateCategories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoriesDTO: CreateCategoriesDTO) {
    return this.categoriesService.create(createCategoriesDTO);
  }

  @Get()
  async findAll() {
    return this.categoriesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id)
  }

  @Patch(':id') 
  async update(@Param('id', ParseIntPipe) id: number, 
  @Body() updateCategoriesDTO: UpdateCategoriesDTO) {
    return this.categoriesService.update(id, updateCategoriesDTO)
  }

  @Delete(':id') 
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id)
  }
}
