import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl(''),
    email : new FormControl('',[Validators.email,Validators.required]),
    username : new FormControl(''),
    password : new FormControl(''),
    confirmpassword : new FormControl('')
  });


  constructor(private appService:AppService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.signupForm.invalid){
      alert("Form is Invalid")
      return;
    }
    if(this.signupForm.value.password != this.signupForm.value.confirmpassword){
      alert("Password and Confirm Password must be same")
      return;
    }
    console.log("submit")
    console.log(this.signupForm.value)
    this.http.post('http://localhost:3000/admin/register',{...this.signupForm.value}).subscribe((res:any) => {
      console.log(res)
      this.router.navigate(['/admin-home']);

    } )
    this.signupForm.reset();
  }

}
