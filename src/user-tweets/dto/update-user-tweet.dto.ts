import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTweetDto } from './create-user-tweet.dto';

export class UpdateUserTweetDto extends PartialType(CreateUserTweetDto) {}
