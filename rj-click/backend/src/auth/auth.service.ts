import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(username) 
    const isMatch = await bcrypt.compare(password, user.password)
    if (user && isMatch) {
      const { password, ...result } = user 
      return result 
    }
    return null
  }

  async login(authDto: AuthDto) {
    const { email } = authDto 
    const payload = { username: email }
    return { acess_token: this.jwtService.sign(payload) }
  }
}
