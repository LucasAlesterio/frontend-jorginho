import { Socket } from "socket.io-client";
import { io } from "socket.io-client";

export class SocketClient {
  static start(namespace: string): Socket {
    const URL = import.meta.env.VITE_URL_SOCKET;
    const socket = io(`${URL}/${namespace}`, {
      transports: ['websocket'],
    });
    return socket;
  }
}
