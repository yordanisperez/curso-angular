import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoVIIComponent } from './aplicativo-vii.component';

describe('AplicativoVIIComponent', () => {
  let component: AplicativoVIIComponent;
  let fixture: ComponentFixture<AplicativoVIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicativoVIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicativoVIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
