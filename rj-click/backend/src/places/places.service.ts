import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  async create(name: string) {
    return `Criando um lugar com name ${name['name']}`;
  }

  async findAll() {
    return 'Retornando todos os lugares';
  }

  async findOne(id: number) {
    return `Retornando um único lugar com o id ${id}`
  }

  async update(id: number, name: string) {
    return `Retornando lugar atualizado id ${id} e novo nome ${name['name']}`
  }

  async delete(id: number) {
    return `Deletando lugar com o id ${id}`
  }
}
