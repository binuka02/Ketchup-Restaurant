import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  url = 'http://localhost:3000/sendemail';
  constructor(private https: HttpClient){}

  sendEmail(url: string, data: any){
    return this.https.post(url, data);
  }

}
