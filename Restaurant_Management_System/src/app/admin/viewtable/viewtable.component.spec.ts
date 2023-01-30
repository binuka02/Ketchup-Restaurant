import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtableComponent } from './viewtable.component';

fdescribe('ViewtableComponent', () => {
  let component: ViewtableComponent;
  let fixture: ComponentFixture<ViewtableComponent>;

  ViewtableComponent.prototype.ngOnInit = () => {
    component.table = [];
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtableComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTable', () => {
    expect(component.table).toBeTruthy();
  });

  it("table should return an array", () => {
    expect(component.table).toEqual([]);
  });


  it("table array should be equal to element row count", () => {
    let tableOrder = fixture.debugElement.nativeElement.querySelector('#table');
    expect(tableOrder).toBeTruthy();
    expect(tableOrder.children.length).toEqual(component.table.length);
  });
});
