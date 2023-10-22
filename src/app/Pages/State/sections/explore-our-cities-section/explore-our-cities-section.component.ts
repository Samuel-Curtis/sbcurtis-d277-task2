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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
