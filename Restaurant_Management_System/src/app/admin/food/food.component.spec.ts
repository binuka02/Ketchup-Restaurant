import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FoodService } from '../food.service';

import { FoodComponent } from './food.component';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  let foodServiceSpy = jasmine.createSpyObj(FoodService, ['getFoodList', 'deleteFood', 'updateFood', 'addFood', 'getFoodById',]);

  foodServiceSpy.getFoodList.and.returnValue({subscribe: () => {}});
  foodServiceSpy.deleteFood.and.returnValue({subscribe: () => {}});
  foodServiceSpy.updateFood.and.returnValue({subscribe: () => {}});
  foodServiceSpy.addFood.and.returnValue({subscribe: () => {}});
  foodServiceSpy.getFoodById.and.returnValue({subscribe: () => {}});



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodComponent ],
      providers: [FormBuilder,{provide: FoodService, useValue: foodServiceSpy}],
      schemas:[NO_ERRORS_SCHEMA]

    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFoodList', () => {
    component.getFood();
    expect(foodServiceSpy.getFoodList).toHaveBeenCalled();
  });

  it("should close modal", () => {
    component.onCloseModal();
    expect(component.showModal).toBeFalse();
  });

  it("should open modal", () => {
    component.onAddFood();
    expect(component.showModal).toBeTrue();
  });

  it("Close Button should call onCloseModal", () => {
    let button = fixture.debugElement.nativeElement.querySelector('#closebtn');
    button.click();
    expect(component.showModal).toBeFalse();
});

  it("add button should call onAddFood", () => {
    let button = fixture.debugElement.nativeElement.querySelector('#addbtn');
    button.click();
    expect(component.showModal).toBeTrue();
});
});
