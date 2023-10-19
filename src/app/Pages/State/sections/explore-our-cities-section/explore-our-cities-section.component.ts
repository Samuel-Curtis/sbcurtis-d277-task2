import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-explore-our-cities-section',
  templateUrl: './explore-our-cities-section.component.html',
  styleUrls: ['./explore-our-cities-section.component.scss']
})
export class ExploreOurCitiesSectionComponent {

  header: string = "Explore Our Cities";
  showModal: boolean = false;
  currentCity = {
    name: 'test',
    description: 'This is a description'
  }

  constructor(public router: Router) {

  }

  openModal(city: string): void {
    this.currentCity.name = city
    this.showModal = true
  }

  routeToCity(): void {
    this.router.navigate(['city', this.currentCity.name])
  }
}
