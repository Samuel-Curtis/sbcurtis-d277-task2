import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-citations-page',
  templateUrl: './citations-page.component.html',
  styleUrls: ['./citations-page.component.scss']
})
export class CitationsPageComponent {
  header: string = 'Citations'

  constructor(public titleService: Title) {
    this.titleService.setTitle(this.header)
  }
}
