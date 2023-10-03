import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFunFactsComponent } from './state-fun-facts.component';

describe('StateFunFactsComponent', () => {
  let component: StateFunFactsComponent;
  let fixture: ComponentFixture<StateFunFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateFunFactsComponent]
    });
    fixture = TestBed.createComponent(StateFunFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
