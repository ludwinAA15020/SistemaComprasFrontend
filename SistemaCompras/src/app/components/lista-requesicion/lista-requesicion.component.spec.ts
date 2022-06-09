import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRequesicionComponent } from './lista-requesicion.component';

describe('ListaRequesicionComponent', () => {
  let component: ListaRequesicionComponent;
  let fixture: ComponentFixture<ListaRequesicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRequesicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRequesicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
