import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit {
  foodForm : FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  });
  showModal: boolean = false;
  editMode: boolean = false;
  food: Food[] = [];

  constructor(private fb: FormBuilder, private foodService: FoodService) { }


  ngOnInit(): void {
    this.getFood();
    // this.foodForm = this.fb.group({
    //   _id: [''],
    //   name: ['', Validators.required],
    //   price: ['', Validators.required],
    //   description: ['', Validators.required]
    // })
  }

  getFood() {
    this.foodService.getFoodList().subscribe((res: Food[]) => {
      console.log(res);
      this.food = res;
    })
  }

  onDeleteFood(id:string) {
    if (confirm('Do you want to delete this food?')) {
      this.foodService.deleteFood(id).subscribe(
        (res) => {
          console.log(res);
          this.getFood();
        },
        err => {
          console.log(err);
        })
    }
  }

  onEditFood(food: Food) {
    this.editMode = true;
    this.showModal = true;
    this.foodForm.patchValue(food);
  }

  onFoodSubmit() {
    console.log('inside onFoodSubmit')
    console.log('this.foodForm.value: ' + this.foodForm.value)
    if (this.foodForm.valid) {
      console.log('valid')
      if (this.editMode) {
        this.foodService.addFood(this.foodForm.value).subscribe(
          res => {
            console.log(res)
            this.getFood();
            this.onCloseModal();
          },
          err => {console.log(err)}
        )
      }
      else {
        console.log('invalid')
        this.foodService.addFood(this.foodForm.value).subscribe(
          res => {
            this.getFood();
            this.onCloseModal();
          }, err => console.log(err))
      }
    }
  }

  onCloseModal() {
    this.showModal = false;
    this.editMode = false;
  }

  onAddFood() {
    this.showModal = true;
  }


}
