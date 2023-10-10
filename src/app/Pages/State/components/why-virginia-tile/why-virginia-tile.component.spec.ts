import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVirginiaTileComponent } from './why-virginia-tile.component';

describe('WhyVirginiaTileComponent', () => {
  let component: WhyVirginiaTileComponent;
  let fixture: ComponentFixture<WhyVirginiaTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyVirginiaTileComponent]
    });
    fixture = TestBed.createComponent(WhyVirginiaTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
