import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsrComponent } from './ksr.component';

describe('KsrComponent', () => {
  let component: KsrComponent;
  let fixture: ComponentFixture<KsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
