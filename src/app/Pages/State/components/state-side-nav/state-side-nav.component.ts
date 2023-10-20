import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { StateSection } from '../../models/section-ids.interface';

@Component({
  selector: 'app-state-side-nav',
  templateUrl: './state-side-nav.component.html',
  styleUrls: ['./state-side-nav.component.scss']
})
export class StateSideNavComponent {

  @Output() scrollEvent = new EventEmitter<StateSection>();
  navContainerWidth: string = '100%'
  navbarClosed: boolean = false;


  scrollToLanding(): void {
    this.scrollEvent.emit(StateSection.LANDING);
  }

  scrollToWhyVa(): void {
    this.scrollEvent.emit(StateSection.WHY_VIRGINIA);
  }

  scrollToCities(): void {
    this.scrollEvent.emit(StateSection.EXPLORE_OUR_CITIES);
  }

  toggleNav(): void {
    if (this.navContainerWidth == '100%') {
      this.navContainerWidth = '0%'
    } else {
      this.navContainerWidth = '100%'
    }
    this.navbarClosed = !this.navbarClosed
  }
}
