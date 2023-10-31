import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CityData } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-landing',
  templateUrl: './city-landing.component.html',
  styleUrls: ['./city-landing.component.scss']
})
export class CityLandingComponent implements OnChanges {
  @Input() city!: CityData;
  backgroundImageUrl!: string;

  ngOnChanges(): void {
    let city = this.city.name.toLowerCase()
    this.backgroundImageUrl = `assets/${city}-virginia.jpg`
  }

}
