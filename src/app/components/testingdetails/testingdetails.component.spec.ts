import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingdetailsComponent } from './testingdetails.component';

describe('TestingdetailsComponent', () => {
  let component: TestingdetailsComponent;
  let fixture: ComponentFixture<TestingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
