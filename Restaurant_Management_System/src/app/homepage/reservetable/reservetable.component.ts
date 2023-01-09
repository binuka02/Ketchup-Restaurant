import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.scss']
})
export class ReservetableComponent implements OnInit {
  tableForm : FormGroup = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    date : new FormControl(''),
    time : new FormControl(''),
    seatscount : new FormControl('')
  });


  constructor(private appService:AppService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.tableForm.invalid){
      return;
    }
    console.log("submit")
    console.log(this.tableForm.value)
    this.http.post('http://localhost:3000/table',{...this.tableForm.value}).subscribe((res:any) => {
      console.log(res)
    } )
  }

}


