import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  });


  constructor(private appService:AppService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.signupForm.invalid){
      return;
    }
    console.log("submit")
    console.log(this.signupForm.value)
    this.http.post('http://localhost:3000/admin',{...this.signupForm.value}).subscribe((res:any) => {
      console.log(res)
    } )
    this.signupForm.reset();
  }

}
