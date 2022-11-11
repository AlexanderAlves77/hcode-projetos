import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDTO } from './dto/createUsers.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsersDTO: CreateUsersDTO) {
    const { name, email, password } = createUsersDTO
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    return this.prisma.users.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
      }
    });
  }

  async findAll() {
    return this.prisma.users.findMany()
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
