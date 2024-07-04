import { IsBoolean, IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  isDone: boolean = false;
  @IsEmpty({ message: "User id can't be entered" })
  user: User;
}
