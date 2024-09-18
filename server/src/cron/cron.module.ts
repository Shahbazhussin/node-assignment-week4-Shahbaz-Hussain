import { Module } from '@nestjs/common';
import { ChatModule } from '../chat/chat.module';
import { CronService } from './cron.service';

@Module({
  imports: [ChatModule], 
  providers: [CronService], 
})
export class CronModule {}
