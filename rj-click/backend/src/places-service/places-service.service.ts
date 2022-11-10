import { Injectable } from '@nestjs/common';
import { CreatePlacesServiceDTO } from './dto/create-placesService.dto';
import { UpdatePlacesServiceDTO } from './dto/update-placesService.dto';

@Injectable()
export class PlacesServiceService {
  async create(createPlacesServiceDTO: CreatePlacesServiceDTO) {
    return {
      message: 'Criando um novo registro',
      data: createPlacesServiceDTO.name
    }
  }

  async findAll(){
    return { message: 'Listando todos os registros' }
  }

  async findOne(id: number) {
    return { message: 'Retornando um unico registro', id: id }
  }

  async update(id: number, updatePlacesServiceDTO: UpdatePlacesServiceDTO) {
    return {
      message: 'Retornando dados atualizados do registro',
      data: updatePlacesServiceDTO.name
    }
  }

  async delete(id: number) {
    return { message: 'Excluindo um registro', id: id }
  }
}
