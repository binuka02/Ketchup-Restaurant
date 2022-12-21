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
    description: new FormControl(''),
    type: new FormControl(''),
    image: new FormControl('')
  });
  showModal: boolean = false;
  editMode: boolean = false;
  food: Food[] = [];
  imageFile: File | null = null;
  imagePicked = "";
  id =""
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
    this.id = food._id
    this.foodForm.patchValue(food);
  }

  onFoodSubmit() {
    console.log('inside onFoodSubmit')
    console.log('this.foodForm.value: ' + this.foodForm.value)
    if (this.foodForm.valid) {
      console.log('valid')
      if (this.editMode) {
        this.foodService.updateFood(this.id,this.foodForm.value,this.imageFile).subscribe(
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
        this.foodService.addFood(this.foodForm.value,this.imageFile).subscribe(
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

  handleFileInput(event: any) {

    if (

      event.target.files[0].type !== 'image/png' &&

      event.target.files[0].type !== 'image/jpeg'

    ) {

      return;

    }



    if (event.target.files && event.target.files.length) {

      var fr = new FileReader();

      fr.onload = () => {

        this.imagePicked = fr.result as string;

        this.foodForm.get('image')?.updateValueAndValidity();

      };

      fr.readAsDataURL(event.target.files[0]);

    }

    this.imageFile = event.target.files[0];
    console.log(this.imageFile);
    console.log(this.imagePicked);

  }


}