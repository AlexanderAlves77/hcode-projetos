import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlacesDTO } from './dto/create-places.dto';
import { UpdatePlacesDTO } from './dto/update-places.dto';

@Injectable()
export class PlacesService {
  constructor(private readonly prisma: PrismaService)  {}

  // Cria os lugares
  async create(createPlacesDTO: CreatePlacesDTO) {
    const { name, categoryId } = createPlacesDTO
    return this.prisma.places.create({
      data: { name: name, categoryId: Number(categoryId) }
    })
  }

  // Retorna todos os lugares
  async findAll() {
    return this.prisma.places.findMany()
  }

  // Retorna um unico lugar
  async findOne(id: number) {
    return this.prisma.places.findUnique({ where: { id: id }})
  }

  // Atualiza o nome do lugar
  async update(id: number, updatePlacesDTO: UpdatePlacesDTO) {
    const { name, categoryId } = updatePlacesDTO
    return this.prisma.places.update({ 
      where: { id: id },
      data: { name: name, categoryId: Number(categoryId) }
    })
  }

  // Exclui um lugar
  async delete(id: number) {
    return this.prisma.places.delete({ where: { id: id }})
  }
}