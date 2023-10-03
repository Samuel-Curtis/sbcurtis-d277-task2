import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSideNavComponent } from './state-side-nav.component';

describe('SideNavComponent', () => {
  let component: StateSideNavComponent;
  let fixture: ComponentFixture<StateSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateSideNavComponent]
    });
    fixture = TestBed.createComponent(StateSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
