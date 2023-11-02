import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBussesComponent } from './add-busses.component';

describe('AddBussesComponent', () => {
  let component: AddBussesComponent;
  let fixture: ComponentFixture<AddBussesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBussesComponent]
    });
    fixture = TestBed.createComponent(AddBussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
