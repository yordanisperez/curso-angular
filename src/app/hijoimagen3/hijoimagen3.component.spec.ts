import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijoimagen3Component } from './hijoimagen3.component';

describe('Hijoimagen3Component', () => {
  let component: Hijoimagen3Component;
  let fixture: ComponentFixture<Hijoimagen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hijoimagen3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijoimagen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
