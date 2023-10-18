import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCategoryComponent } from './city-category.component';

describe('CityCategoryComponent', () => {
  let component: CityCategoryComponent;
  let fixture: ComponentFixture<CityCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityCategoryComponent]
    });
    fixture = TestBed.createComponent(CityCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
