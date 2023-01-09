import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.scss']
})
export class ViewordersComponent implements OnInit {
orders:Order[] = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Order[]>('http://localhost:3000/order').subscribe((res:any) => {
      console.log(res)
      this.orders = res
    })
  }

}
