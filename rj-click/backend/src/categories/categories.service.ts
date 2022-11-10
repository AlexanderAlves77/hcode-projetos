import { Injectable } from '@nestjs/common';
import { CreateCategoriesDTO } from './dto/createCategories.dto';
import { UpdateCategoriesDTO } from './dto/updateCategories.dto';

@Injectable()
export class CategoriesService {
  async create(createCategoriesDTO: CreateCategoriesDTO) {
    return createCategoriesDTO;
  }

  async findAll() {
    return 'Retornando todas as categorias';
  }

  async findOne(id: number) {
    return `Retornando uma única categoria com o id ${id}`
  }

  async update(id: number, updateCategoriesDTO: UpdateCategoriesDTO) {
    return { id: id, data: updateCategoriesDTO }
  }

  async delete(id: number) {
    return `Deletando categoria com o id ${id}`
  }
}
