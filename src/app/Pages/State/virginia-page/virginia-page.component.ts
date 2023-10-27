import { Component } from '@angular/core';
import { StateSection } from '../models/section-ids.interface';
import { stateData } from 'src/assets/data/data';

@Component({
  selector: 'app-virginia-page',
  templateUrl: './virginia-page.component.html',
  styleUrls: ['./virginia-page.component.scss']
})
export class VirginiaPageComponent {

  // Pull from data
  stateFunFacts: string[] = stateData.data.funFacts

  scroll(sectionId: StateSection): void {
    let element: HTMLElement | null = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
