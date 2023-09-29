import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOurCitiesSectionComponent } from './explore-our-cities-section.component';

describe('ExploreOurCitiesSectionComponent', () => {
  let component: ExploreOurCitiesSectionComponent;
  let fixture: ComponentFixture<ExploreOurCitiesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreOurCitiesSectionComponent]
    });
    fixture = TestBed.createComponent(ExploreOurCitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
