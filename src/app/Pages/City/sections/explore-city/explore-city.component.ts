import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-city',
  templateUrl: './explore-city.component.html',
  styleUrls: ['./explore-city.component.scss']
})
export class ExploreCityComponent {
  @Input() city!: string;
}
