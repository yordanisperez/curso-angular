import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijoimagen2Component } from './hijoimagen2.component';

describe('Hijoimagen2Component', () => {
  let component: Hijoimagen2Component;
  let fixture: ComponentFixture<Hijoimagen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hijoimagen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijoimagen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
