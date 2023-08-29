import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDocComponent } from './register-doc.component';

describe('RegisterDocComponent', () => {
  let component: RegisterDocComponent;
  let fixture: ComponentFixture<RegisterDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDocComponent]
    });
    fixture = TestBed.createComponent(RegisterDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
