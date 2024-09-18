import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat/chat.service';

@WebSocketGateway({
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
})
export class ChatGateway {

    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) { }
    @SubscribeMessage('sendMessage')
    async handleMessage(@MessageBody() message: any): Promise<void> {
        if (!message || !message.text || !message.user) {
            console.error('Invalid message received', message);
            return;
        }

        const savedMessage = this.chatService.saveMessage(message);
        this.server.emit('newMessage', savedMessage);
    }

}



