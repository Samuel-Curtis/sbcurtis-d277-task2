import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCitiesComponent } from './compare-cities.component';

describe('CompareCitiesComponent', () => {
  let component: CompareCitiesComponent;
  let fixture: ComponentFixture<CompareCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareCitiesComponent]
    });
    fixture = TestBed.createComponent(CompareCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
