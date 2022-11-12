import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsersDTO } from './dto/createUsers.dto';
import * as bcrypt from "bcrypt";
import { UpdateUsersDto } from './dto/updateUsers.dto';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsersDTO: CreateUsersDTO) {
    const { name, email, password } = createUsersDTO
    const passwordHash = await this.passwordHash(password)

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
    return this.prisma.users.findUnique({
      where: { id: id }
    })
  }

  async findByEmail(email: string): Promise<users | undefined> {
    return this.prisma.users.findUnique({
      where: { email: email }
    })
  }

  async update(id: number, updateUsersDTO: UpdateUsersDto) {
    const { name, email, password } = updateUsersDTO
    const passwordHash = await this.passwordHash(password)

    return this.prisma.users.update({
      where: { id: id },
      data: {
        name: name,
        email: email,
        password: passwordHash
      }
    });
  }

  async delete(id: number) {
    return this.prisma.users.delete({
      where: { id: id }
    })
  }

  private async passwordHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash
  }
}
