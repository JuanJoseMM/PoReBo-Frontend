import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDenunciaComponent } from './add-denuncia.component';

describe('AddDenunciaComponent', () => {
  let component: AddDenunciaComponent;
  let fixture: ComponentFixture<AddDenunciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDenunciaComponent]
    });
    fixture = TestBed.createComponent(AddDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
