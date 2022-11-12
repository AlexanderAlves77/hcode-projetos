import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUsersDTO } from './dto/createUsers.dto';
import { UpdateUsersDto } from './dto/updateUsers.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUsersDTO: CreateUsersDTO) {
    return this.usersService.create(createUsersDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id)
  }

  @Patch(':id') 
  async update(@Param('id') id: number, @Body() updateUserDTO: UpdateUsersDto) {
    return this.usersService.update(id, updateUserDTO)
  }

  @Delete(':id') 
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id)
  }
}
