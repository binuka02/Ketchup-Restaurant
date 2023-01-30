import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-success',
  templateUrl: './reserve-success.component.html',
  styleUrls: ['./reserve-success.component.scss']
})
export class ReserveSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/']);
          },3000)
  }

}


