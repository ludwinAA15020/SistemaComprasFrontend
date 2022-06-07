import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCompaniaComponent } from './crear-compania.component';

describe('CrearCompaniaComponent', () => {
  let component: CrearCompaniaComponent;
  let fixture: ComponentFixture<CrearCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCompaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
