import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaMapComponent } from './va-map.component';

describe('VaMapComponent', () => {
  let component: VaMapComponent;
  let fixture: ComponentFixture<VaMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaMapComponent]
    });
    fixture = TestBed.createComponent(VaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
