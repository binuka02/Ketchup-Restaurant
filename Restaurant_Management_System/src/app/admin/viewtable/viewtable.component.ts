import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Table } from './table';

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.scss']
})
export class ViewtableComponent implements OnInit {
table:Table[] = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Table[]>('http://localhost:3000/table').subscribe((res:any) => {
      console.log(res)
      this.table = res
    }
    )
  }

}
