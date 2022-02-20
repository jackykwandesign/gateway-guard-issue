import { UseGuards } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { TestGuard } from './test.guard';
import { Socket, Server as SocketIOServer } from 'socket.io';

// not working
@UseGuards(TestGuard)
@WebSocketGateway({
  transports: ['websocket'],
  cors: {
    origin: '*',
  },
  namespace:"/"
})
export class WSGateway implements NestGateway {
  afterInit(server: SocketIOServer) {
    console.log(`WS ${WSGateway.name} init`);
  }
  handleDisconnect(client: Socket) {
    console.log('client disconnect', client.id);
  }
  // not working
  @UseGuards(TestGuard)
  handleConnection(client: Socket, ...args: any[]) {
    console.log('client connect', client.id);
  }
  // working
  @UseGuards(TestGuard)
  @SubscribeMessage('message')
  handleCreateRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.send('test', body);
  }
}
