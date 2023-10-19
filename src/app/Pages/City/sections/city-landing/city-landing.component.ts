import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-landing',
  templateUrl: './city-landing.component.html',
  styleUrls: ['./city-landing.component.scss']
})
export class CityLandingComponent {
  @Input() city!: string;
}
