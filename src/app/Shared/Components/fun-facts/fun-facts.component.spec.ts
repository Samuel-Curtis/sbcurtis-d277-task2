import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsComponent } from './fun-facts.component';

describe('StateFunFactsComponent', () => {
  let component: FunFactsComponent;
  let fixture: ComponentFixture<FunFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunFactsComponent]
    });
    fixture = TestBed.createComponent(FunFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
