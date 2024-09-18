import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { CronModule } from './cron/cron.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(),
    ChatModule, CronModule],
})
export class AppModule {}
