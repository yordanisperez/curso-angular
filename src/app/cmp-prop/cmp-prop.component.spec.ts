import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPropComponent } from './cmp-prop.component';

describe('CmpPropComponent', () => {
  let component: CmpPropComponent;
  let fixture: ComponentFixture<CmpPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
