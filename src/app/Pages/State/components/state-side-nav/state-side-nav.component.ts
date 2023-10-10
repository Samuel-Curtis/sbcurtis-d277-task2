import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateSection } from '../../models/section-ids.interface';

@Component({
  selector: 'app-state-side-nav',
  templateUrl: './state-side-nav.component.html',
  styleUrls: ['./state-side-nav.component.scss']
})
export class StateSideNavComponent {

  @Output() scrollEvent = new EventEmitter<StateSection>();

  showSidenav: boolean = true;

  scrollToLanding(): void {
    this.scrollEvent.emit(StateSection.LANDING);
  }

  scrollToWhyVa(): void {
    this.scrollEvent.emit(StateSection.WHY_VIRGINIA);
  }

  scrollToCities(): void {
    this.scrollEvent.emit(StateSection.EXPLORE_OUR_CITIES);
  }
}
