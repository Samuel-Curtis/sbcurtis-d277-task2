import { Component } from '@angular/core';
import { StateSection } from '../models/section-ids.interface';

@Component({
  selector: 'app-virginia-page',
  templateUrl: './virginia-page.component.html',
  styleUrls: ['./virginia-page.component.scss']
})
export class VirginiaPageComponent {

  scroll(sectionId: StateSection): void {
    let element: HTMLElement | null = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
