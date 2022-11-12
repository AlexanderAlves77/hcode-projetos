import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDTO } from './createUsers.dto';

export class UpdateUsersDto extends PartialType(CreateUsersDTO) {}