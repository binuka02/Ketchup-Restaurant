import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  foodForm: FormGroup;
  showModal: boolean = false;
  editMode: boolean = false;
  food: Food[];

  constructor(private fb: FormBuilder, private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFood();
    this.foodForm = this.fb.group({
      _id: [''],
      name: ['Ex. Nabendu Biswas', Validators.required],
      price: ['Ex. Full Stack Developer', Validators.required],
      description: ['Development']
    })
  }

  getFood() {
    this.foodService.getFoodList().subscribe((res: Food[]) => {
      console.log(res);
      this.food = res;
    })
  }

  onDeleteFood(id) {
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
    if (this.foodForm.valid) {
      if (this.editMode) {
        this.foodService.updateFood(this.foodForm.value).subscribe(
          res => {
            this.getFood();
            this.onCloseModal();
          }, err => console.log(err))
      }
      else {
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
