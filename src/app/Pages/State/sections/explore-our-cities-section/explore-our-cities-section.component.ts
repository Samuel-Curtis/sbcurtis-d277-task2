import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityData } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-explore-our-cities-section',
  templateUrl: './explore-our-cities-section.component.html',
  styleUrls: ['./explore-our-cities-section.component.scss']
})
export class ExploreOurCitiesSectionComponent {

  header: string = "Explore Our Cities";
  showModal: boolean = false;
  currentCity: CityData | null = null

  // Pull from Data
  cities: CityData[] = [
    {
      name: 'Richmond',
      description: 'Richmond Description'
    },
    {
      name: 'Roanoke',
      description: 'Roanoke Description'
    },
    {
      name: 'Lynchburg',
      description: 'Lynchburg Description'
    }
  ]


  constructor(public router: Router) {}

  openModal(city: string): void {
    this.currentCity = this.cities.find((data) => data.name == city) || null
    this.showModal = this.currentCity ? true : false
  }

  routeToCity(): void {
    this.router.navigate(['city', this.currentCity?.name])
  }
}
