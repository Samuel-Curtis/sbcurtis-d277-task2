import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVirginiaSectionComponent } from './why-virginia-section.component';

describe('WhyVirginiaSectionComponent', () => {
  let component: WhyVirginiaSectionComponent;
  let fixture: ComponentFixture<WhyVirginiaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyVirginiaSectionComponent]
    });
    fixture = TestBed.createComponent(WhyVirginiaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
