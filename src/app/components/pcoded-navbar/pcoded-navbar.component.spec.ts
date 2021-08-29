import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcodedNavbarComponent } from './pcoded-navbar.component';

describe('PcodedNavbarComponent', () => {
  let component: PcodedNavbarComponent;
  let fixture: ComponentFixture<PcodedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcodedNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcodedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
