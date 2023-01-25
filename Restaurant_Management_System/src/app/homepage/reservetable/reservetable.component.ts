import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.scss']
})
export class ReservetableComponent implements OnInit {
  tableForm : FormGroup = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    date : new FormControl('',[Validators.required]),
    time : new FormControl('',[Validators.required]),
    seatcount : new FormControl('',[Validators.required])
  });


  constructor(private appService:AppService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.tableForm.invalid){
      alert("Please Enter all Details!")
      return;
    }
    console.log("submit")
    console.log(this.tableForm.value)
    this.http.post('http://localhost:3000/table',{...this.tableForm.value}).subscribe((res:any) => {
      console.log(res)
    } )
    this.tableForm.reset();
  }

}


