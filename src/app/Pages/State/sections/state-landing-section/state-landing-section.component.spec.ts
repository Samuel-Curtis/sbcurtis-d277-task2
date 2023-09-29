import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLandingSectionComponent } from './state-landing-section.component';

describe('StateLandingSectionComponent', () => {
  let component: StateLandingSectionComponent;
  let fixture: ComponentFixture<StateLandingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateLandingSectionComponent]
    });
    fixture = TestBed.createComponent(StateLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
