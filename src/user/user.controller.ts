import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const USER = [
  {
    id: 0,
    username: 0,
    password: 0,
  },
  {
    id: 1,
    username: 1,
    password: 1,
  },
  {
    id: 2,
    username: 2,
    password: 2,
  },
];

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return USER;
  }
}
