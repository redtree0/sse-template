import { Injectable } from '@nestjs/common';
import { fromEvent } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable()
export class EventService {
  private readonly emitter: EventEmitter;
  constructor() {
    this.emitter = new EventEmitter();
  }
  static users = {};

  subscribe(userId = 0) {
    EventService.users[userId] = {};
    return fromEvent(this.emitter, `user-tweets:${userId}`);
  }
  // https://www.reddit.com/r/Nestjs_framework/comments/r7z1ak/server_sent_events_sse_with_user_context_and/
  async emit(data) {
    this.emitter.emit('user-tweets:0', { data });
  }

  async notify(userId, data) {
    this.emitter.emit(`user-tweets:${userId}`, { data });
  }

  async broadcast(data) {
    for (const [key, value] of Object.entries(EventService.users)) {
      console.log(key, value);
      this.emitter.emit(`user-tweets:${key}`, { data });
    }
  }
}
