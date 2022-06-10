import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
  Request,
  Query,
} from '@nestjs/common';
import { UserTweetsService } from './user-tweets.service';
import { CreateUserTweetDto } from './dto/create-user-tweet.dto';
import { UpdateUserTweetDto } from './dto/update-user-tweet.dto';
import { EventService } from 'src/event/event.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user-tweets')
@ApiTags('user-tweets API')
export class UserTweetsController {
  constructor(
    private readonly userTweetsService: UserTweetsService,
    private readonly eventService: EventService,
  ) {}

  @Sse('events')
  @ApiOperation({ summary: 'SSE 용', description: 'SSE 용' })
  events(@Request() req) {
    return this.eventService.subscribe();
  }

  @Sse('events/:id')
  @ApiOperation({ summary: 'SSE 용', description: 'SSE 용' })
  eventsById(@Request() req, @Param('id') userId: number) {
    return this.eventService.subscribe(userId);
  }

  @Post()
  @ApiOperation({ summary: '데이터 생성', description: '데이터 생성' })
  create(@Body() createUserTweetDto: CreateUserTweetDto) {
    const userTweet = this.userTweetsService.create(createUserTweetDto);
    // this.eventService.emit({ userTweet });
    this.eventService.broadcast({ userTweet });
    return userTweet;
  }

  @Get()
  @ApiOperation({ summary: '조회', description: '조회' })
  findAll() {
    return this.userTweetsService.findAll();
  }


  @Get('/mock')
  @ApiOperation({ summary: '데이터 생성', description: '데이터 생성' })
  abTest() {
    console.log('=====');
    const userTweet = this.userTweetsService.create({
      username: 'hello',
      id: 0,
      content: 'test',
    });
    console.log(userTweet);
    // this.eventService.emit({ userTweet });
    this.eventService.broadcast({ userTweet });
    return userTweet;
  }
  
  @Get(':id')
  @ApiOperation({ summary: '조회', description: '조회' })
  findOne(@Param('id') id: string) {
    return this.userTweetsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '갱신', description: '갱신' })
  update(
    @Param('id') id: string,
    @Body() updateUserTweetDto: UpdateUserTweetDto,
  ) {
    return this.userTweetsService.update(+id, updateUserTweetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '삭제', description: '삭제' })
  remove(@Param('id') id: string) {
    return this.userTweetsService.remove(+id);
  }

  @Post('notify')
  @ApiOperation({ summary: '테스트용', description: '테스트용' })
  async emit() {
    this.eventService.emit({ emitting: new Date().toISOString() });
    return { ok: true };
  }

  @Get('test')
  @ApiOperation({
    summary: '누구에게 보내낼 내용',
    description: '누구에게 보내낼 내용',
  })
  notify(@Query('to') to: number, @Body() data: any) {
    this.eventService.notify(to, { data });
  }

}
