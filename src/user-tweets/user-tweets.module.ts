import { Module } from '@nestjs/common';
import { UserTweetsService } from './user-tweets.service';
import { UserTweetsController } from './user-tweets.controller';
import { EventService } from 'src/event/event.service';

@Module({
  controllers: [UserTweetsController],
  providers: [UserTweetsService, EventService],
})
export class UserTweetsModule {}
