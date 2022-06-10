import { Injectable } from '@nestjs/common';
import { CreateUserTweetDto } from './dto/create-user-tweet.dto';
import { UpdateUserTweetDto } from './dto/update-user-tweet.dto';

const USER_TWEETS = [
  {
    id: 0,
    username: 0,
    content: '게시글0',
  },
  {
    id: 1,
    username: 0,
    content: '게시글1',
  },
  {
    id: 2,
    username: 0,
    content: '게시글2',
  },
  {
    id: 3,
    username: 1,
    content: '게시글3',
  },
  {
    id: 4,
    username: 1,
    content: '게시글4',
  },
];

@Injectable()
export class UserTweetsService {
  create(createUserTweetDto: CreateUserTweetDto) {
    USER_TWEETS.push(createUserTweetDto as any);
    console.log(USER_TWEETS);
    return createUserTweetDto;
  }

  findAll() {
    return USER_TWEETS;
  }

  findOne(id: number) {
    return USER_TWEETS[id];
  }

  update(id: number, updateUserTweetDto: UpdateUserTweetDto) {
    USER_TWEETS[id] = updateUserTweetDto as any;
    return updateUserTweetDto;
  }

  remove(id: number) {
    return USER_TWEETS.splice(id, 1);
  }
}
