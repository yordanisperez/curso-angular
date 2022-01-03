import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoReactivoComponent } from './aplicativo-reactivo.component';

describe('AplicativoReactivoComponent', () => {
  let component: AplicativoReactivoComponent;
  let fixture: ComponentFixture<AplicativoReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicativoReactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicativoReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
