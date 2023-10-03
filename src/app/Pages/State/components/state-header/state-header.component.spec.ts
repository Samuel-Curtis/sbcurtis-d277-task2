import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateHeaderComponent } from './state-header.component';

describe('StateHeaderComponent', () => {
  let component: StateHeaderComponent;
  let fixture: ComponentFixture<StateHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateHeaderComponent]
    });
    fixture = TestBed.createComponent(StateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
