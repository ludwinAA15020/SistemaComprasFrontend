import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCompaniaComponent } from './agregar-compania.component';

describe('AgregarCompaniaComponent', () => {
  let component: AgregarCompaniaComponent;
  let fixture: ComponentFixture<AgregarCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCompaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
