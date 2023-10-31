import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsPageComponent } from './citations-page.component';

describe('CitationsPageComponent', () => {
  let component: CitationsPageComponent;
  let fixture: ComponentFixture<CitationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitationsPageComponent]
    });
    fixture = TestBed.createComponent(CitationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
