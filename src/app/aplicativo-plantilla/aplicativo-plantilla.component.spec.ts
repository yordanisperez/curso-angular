import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoPlantillaComponent } from './aplicativo-plantilla.component';

describe('AplicativoPlantillaComponent', () => {
  let component: AplicativoPlantillaComponent;
  let fixture: ComponentFixture<AplicativoPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicativoPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicativoPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
