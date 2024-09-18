import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cron } from '@nestjs/schedule';
import { ChatService } from 'src/chat/chat.service';

@Injectable()
export class CronService {
  constructor(private readonly chatService: ChatService) {}

@Cron('0 */2 * * *') 
handleCron() {
  const messages = this.chatService.getMessages();
  const filePath = path.join(__dirname, '../../logs/message-log.txt');
  const logContent = messages.map(msg => {
    return `From: ${msg.user}  ` + 
           `Message: ${msg.text}\n` +
           `Sent at: ${msg.timestamp}\n`+
           `\n`;
  }).join('\n\n');

  fs.appendFileSync(filePath, logContent);
  this.chatService.clearMessages();
}
}

