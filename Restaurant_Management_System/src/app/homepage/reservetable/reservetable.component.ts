import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}


