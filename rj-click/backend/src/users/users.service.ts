import { Injectable } from '@nestjs/common';
import { CreateUsersDTO } from './dto/createUsers.dto';

@Injectable()
export class UsersService {
  async create(createUsersDTO: CreateUsersDTO) {
    return createUsersDTO;
  }

  async findAll() {
    return 'Retornando todos os usuários cadastrados';
  }

  async findOne(id: number) {
    return `Retornando um único usuário com o id ${id}`
  }

  async update(id: number, user: string) {
    return `Retornando usuário atualizado id ${id} e novo nome ${user['user']}`
  }

  async delete(id: number) {
    return `Deletando usuário com o id ${id}`
  }
}
