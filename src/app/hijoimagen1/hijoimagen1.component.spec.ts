import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijoimagen1Component } from './hijoimagen1.component';

describe('Hijoimagen1Component', () => {
  let component: Hijoimagen1Component;
  let fixture: ComponentFixture<Hijoimagen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hijoimagen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijoimagen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
