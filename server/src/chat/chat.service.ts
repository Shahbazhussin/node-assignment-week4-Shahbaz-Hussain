import { Injectable } from '@nestjs/common';

interface Message {
  user: string;
  text: string;
  timestamp: string;
}

@Injectable()
export class ChatService {
  private messages: Message[] = [];

  saveMessage(message: Message) {
    if (message && message.user && message.text  && message.timestamp) {
      this.messages.push({
        user: message.user,
        text: message.text,
        timestamp: message.timestamp,
      });
      console.log('Message saved:', message);
    } else {
      console.error('Invalid message format:', message);
    }
    return message;
  }

  getMessages() {
    return this.messages;
  }

  clearMessages() {
    this.messages = [];
  }
}
