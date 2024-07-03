import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { AuthUserDto } from './dto/auth.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly jwtService: JwtService,
    private readonly userModel: Model<User>,
  ) {}
  //   users = [
  //     {
  //       id: 1,
  //       email: 'adnan101@gmail.com',
  //       password: '123456',
  //     },
  //     {
  //       id: 2,
  //       email: 'adnan11@gmail.com',
  //       password: '123456',
  //     },
  //   ];
  async signUp(signUpDto: SignUpDto) {
    const { name, email, password } = signUpDto;
    const hash = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hash,
    });
    const userToken = this.jwtService.sign({ id: user._id });
    return { userToken };
  }
}
