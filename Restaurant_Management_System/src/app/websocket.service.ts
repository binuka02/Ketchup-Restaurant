import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket = io( 'http://localhost:3000');

  constructor() {}



  listenToServer(connection: string): Observable<any> {

    return new Observable((observer) => {

      this.socket.on(connection, (data) => {

        observer.next(data);

      });

    });

  }



  emit(eventName: string, data: any) {

    this.socket.emit(eventName, data);

  }



  disconnect() {

    this.socket.disconnect();

  }
}
