import { Component, EventEmitter, Output } from '@angular/core';
import { StateSection } from '../../models/section-ids.interface';

@Component({
  selector: 'app-state-landing-section',
  templateUrl: './state-landing-section.component.html',
  styleUrls: ['./state-landing-section.component.scss']
})
export class StateLandingSectionComponent {
  header: string = 'Welcome to Virginia';

  @Output() scrollEvent = new EventEmitter<StateSection>();

  scrollToWhyVirginia(): void {
    this.scrollEvent.emit(StateSection.WHY_VIRGINIA)
  }
}
