import { Controller, Request, Get, Sse, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventService } from './event/event.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
