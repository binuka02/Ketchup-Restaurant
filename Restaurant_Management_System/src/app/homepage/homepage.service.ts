import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  url = 'http://localhost:3000/food';
  constructor(private https: HttpClient){}

  getBreakfastItems() {
    return this.https.get(this.url+"?type=breakfast");
  }

  getLunchItems() {
    return this.https.get(this.url+"?type=lunch");
  }

  getDinnerItems() {
    return this.https.get(this.url+"?type=dinner");
  }

  getDrinkItems() {
    return this.https.get(this.url+"?type=drinks");
  }

  getDessertItems() {
    return this.https.get(this.url+"?type=desserts");
  }

  getSoupItems() {
    return this.https.get(this.url+"?type=soups");
  }


}
