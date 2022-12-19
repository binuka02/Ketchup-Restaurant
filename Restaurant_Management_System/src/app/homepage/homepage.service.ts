import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  url = 'https://localhost:3000/homepage';
  constructor(private https: HttpClient){}


}
