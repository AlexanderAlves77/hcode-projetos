import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriesDTO } from './dto/createCategories.dto';
import { UpdateCategoriesDTO } from './dto/updateCategories.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriesDTO: CreateCategoriesDTO) {
    const { name } = createCategoriesDTO
    return await this.prisma.categories.create({
      data: { name }
    });
  }

  async findAll() {
    return this.prisma.categories.findMany();
  }

  async findOne(id: number) {
    return this.prisma.categories.findUnique({ 
      where: { id: id }, 
      include: { places: true } 
    })
  }

  async update(id: number, updateCategoriesDTO: UpdateCategoriesDTO) {
    const { name } = updateCategoriesDTO

    return this.prisma.categories.update({ 
      where: { id: id }, 
      data: { name: name }
    })
  }

  async delete(id: number) {
    return this.prisma.categories.delete({ where: { id: id }})
  }
}
