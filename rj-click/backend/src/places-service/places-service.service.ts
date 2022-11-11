import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlacesServiceDTO } from './dto/create-placesService.dto';
import { UpdatePlacesServiceDTO } from './dto/update-placesService.dto';

@Injectable()
export class PlacesServiceService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPlacesServiceDTO: CreatePlacesServiceDTO) {
    const { name, description, price, placeId } = createPlacesServiceDTO

    return this.prisma.services.create({
      data: {
        name: name,
        description: description,
        price: Number(price),
        placeId: Number(placeId)
      }
    })
  }

  async findAll() {
    return this.prisma.services.findMany()
  }

  async findOne(id: number) {
    return this.prisma.services.findUnique({
      where: { id: id }
    })
  }

  async update(id: number, updatePlacesServiceDTO: UpdatePlacesServiceDTO) {
    const { name, description, price, placeId } = updatePlacesServiceDTO

    return this.prisma.services.update({
      where: { id: id },
      data: {
        name: name,
        description: description,
        price: Number(price),
        placeId: Number(placeId)
      }
    })
  }

  async delete(id: number) {
    return this.prisma.services.delete({
      where: { id: id }
    })
  }
}
