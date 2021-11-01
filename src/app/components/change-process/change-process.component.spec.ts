import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProcessComponent } from './change-process.component';

describe('ChangeProcessComponent', () => {
  let component: ChangeProcessComponent;
  let fixture: ComponentFixture<ChangeProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
