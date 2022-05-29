import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReferenciaComponent } from './ver-referencia.component';

describe('VerReferenciaComponent', () => {
  let component: VerReferenciaComponent;
  let fixture: ComponentFixture<VerReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerReferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
