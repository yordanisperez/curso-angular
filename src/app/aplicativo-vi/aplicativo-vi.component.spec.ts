import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoVIComponent } from './aplicativo-vi.component';

describe('AplicativoVIComponent', () => {
  let component: AplicativoVIComponent;
  let fixture: ComponentFixture<AplicativoVIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicativoVIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicativoVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
