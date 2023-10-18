import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCityComponent } from './explore-city.component';

describe('ExploreCityComponent', () => {
  let component: ExploreCityComponent;
  let fixture: ComponentFixture<ExploreCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreCityComponent]
    });
    fixture = TestBed.createComponent(ExploreCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
