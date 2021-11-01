import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKsrComponent } from './home-ksr.component';

describe('HomeKsrComponent', () => {
  let component: HomeKsrComponent;
  let fixture: ComponentFixture<HomeKsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
