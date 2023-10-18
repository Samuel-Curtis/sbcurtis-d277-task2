import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent {
  @Input() state!: string;

}
