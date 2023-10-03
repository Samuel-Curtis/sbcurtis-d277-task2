import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirginiaPageComponent } from './virginia-page.component';

describe('VirginiaPageComponent', () => {
  let component: VirginiaPageComponent;
  let fixture: ComponentFixture<VirginiaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirginiaPageComponent]
    });
    fixture = TestBed.createComponent(VirginiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
