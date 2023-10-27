import { Component, Input } from '@angular/core';
import { CityData } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-landing',
  templateUrl: './city-landing.component.html',
  styleUrls: ['./city-landing.component.scss']
})
export class CityLandingComponent {
  @Input() city!: CityData;
}
