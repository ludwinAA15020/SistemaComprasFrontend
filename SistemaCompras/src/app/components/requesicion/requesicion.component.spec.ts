import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesicionComponent } from './requesicion.component';

describe('RequesicionComponent', () => {
  let component: RequesicionComponent;
  let fixture: ComponentFixture<RequesicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
