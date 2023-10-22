import { Component } from '@angular/core';
import { StateSection } from '../models/section-ids.interface';

@Component({
  selector: 'app-virginia-page',
  templateUrl: './virginia-page.component.html',
  styleUrls: ['./virginia-page.component.scss']
})
export class VirginiaPageComponent {

  stateFunFacts: string[] = [
    'Test Fun Fact 1',
    'Test Fun Fact 2',
    'Test Fun Fact 3',
    'Test Fun Fact 4',
  ]

  scroll(sectionId: StateSection): void {
    let element: HTMLElement | null = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
