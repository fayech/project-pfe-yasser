import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSecComponent } from './password-sec.component';

describe('PasswordSecComponent', () => {
  let component: PasswordSecComponent;
  let fixture: ComponentFixture<PasswordSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
