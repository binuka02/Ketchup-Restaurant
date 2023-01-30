import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent implements OnInit{
  loginform!: FormGroup;
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }
  ngOnInit(): void {}

  login() {
    console.log(this.loginform.value);
    // alert("Login Successful");
this.http.post("http://localhost:3000/admin/login",this.loginform.value).pipe(catchError((err:any)=>{
  const error = new Error(err.error.msg);
  alert("Login Failed");
  return throwError(()=>error)
})
).subscribe((res:any)=>{
  console.log(res);

    this.router.navigate(['/admin-home']);
  }
)}
}

