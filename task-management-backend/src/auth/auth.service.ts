import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
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
    return { userToken, user };
  }

  async signIn(authUserDto: AuthUserDto) {
    const { email, password } = authUserDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      throw new UnauthorizedException('Wrong Password');
    }
    const token = this.jwtService.sign({ id: user._id });
    return { token, user };
  }
}
