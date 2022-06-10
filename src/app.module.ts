import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventService } from './event/event.service';
import { UserTweetsModule } from './user-tweets/user-tweets.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    UserTweetsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, EventService],
})
export class AppModule {}
