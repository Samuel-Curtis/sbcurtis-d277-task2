import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateSection } from 'src/app/Pages/State/models/section-ids.interface';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  @Input() showScrollOptions!: boolean;
  @Output() scrollEvent = new EventEmitter<StateSection>();
  navContainerWidth: string = '100%'
  navbarClosed: boolean = false;

  scroll(section: string) {
    switch (section) {
      case 'landing':
        this.scrollEvent.emit(StateSection.LANDING);
        break;
      case 'why-va':
        this.scrollEvent.emit(StateSection.WHY_VIRGINIA);
        break;
      case 'explore-our-cities':
        this.scrollEvent.emit(StateSection.EXPLORE_OUR_CITIES);
        break;
      case 'learn-more':
        this.scrollEvent.emit(StateSection.LEARN_MORE);
        break;
      
    }
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
