import { Injectable } from "@angular/core";
import io from 'socket.io-client';
import {Observable} from 'rxjs';


@Injectable()

export class ChatService{

    private socket = io('http://localhost:3000');


}
