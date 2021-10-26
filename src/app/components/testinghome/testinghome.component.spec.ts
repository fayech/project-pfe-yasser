import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinghomeComponent } from './testinghome.component';

describe('TestinghomeComponent', () => {
  let component: TestinghomeComponent;
  let fixture: ComponentFixture<TestinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestinghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
