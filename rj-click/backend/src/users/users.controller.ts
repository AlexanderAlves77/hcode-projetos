import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUsersDTO } from './dto/createUsers.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUsersDTO: CreateUsersDTO) {
    return this.usersService.create(createUsersDTO);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id)
  }

  @Patch(':id') 
  async update(@Param('id') id: number, @Body() user: string) {
    return this.usersService.update(id, user)
  }

  @Delete(':id') 
  async delete(@Param('id') id: number) {
    return this.usersService.delete(id)
  }
}
