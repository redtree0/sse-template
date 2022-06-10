import { Test, TestingModule } from '@nestjs/testing';
import { UserTweetsController } from './user-tweets.controller';
import { UserTweetsService } from './user-tweets.service';

describe('UserTweetsController', () => {
  let controller: UserTweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTweetsController],
      providers: [UserTweetsService],
    }).compile();

    controller = module.get<UserTweetsController>(UserTweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
