import { Component } from '@angular/core';
import { StateSection } from '../models/section-ids.interface';
import { stateData } from 'src/assets/data/data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-virginia-page',
  templateUrl: './virginia-page.component.html',
  styleUrls: ['./virginia-page.component.scss']
})
export class VirginiaPageComponent {

  stateFunFacts: string[] = stateData.data.funFacts

  constructor(private titleService: Title) {
    this.titleService.setTitle('Welcome to VA')
  }

  scroll(sectionId: StateSection): void {
    let element: HTMLElement | null = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
