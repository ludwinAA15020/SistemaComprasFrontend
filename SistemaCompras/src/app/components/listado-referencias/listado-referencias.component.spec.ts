import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReferenciasComponent } from './listado-referencias.component';

describe('ListadoReferenciasComponent', () => {
  let component: ListadoReferenciasComponent;
  let fixture: ComponentFixture<ListadoReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
