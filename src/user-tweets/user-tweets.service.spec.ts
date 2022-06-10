import { Test, TestingModule } from '@nestjs/testing';
import { UserTweetsService } from './user-tweets.service';

describe('UserTweetsService', () => {
  let service: UserTweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTweetsService],
    }).compile();

    service = module.get<UserTweetsService>(UserTweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
