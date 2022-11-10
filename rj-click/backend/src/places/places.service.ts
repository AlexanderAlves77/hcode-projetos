import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  // Cria os lugares
  async create(name: string) {
    return `Lugar ${name['name']} criado com sucesso`;
  }

  // Retorna todos os lugares
  async findAll() {
    return `Retornando todos os lugares`;
  }

  // Retorna um unico lugar
  async findOne(id: number) {
    return `Retornando o lugar id ${id}`;
  }

  // Atualiza o nome do lugar
  async update(id: number, name: string) {
    return `Retornando os dados do lugar id ${id} atualizados con o novo nome ${name['name']}`;
  }

  // Exclui um lugar
  async delete(id: number) {
    return `Lugar com id ${id} excluido com sucesso`;
  }
}