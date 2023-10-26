import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-explore-city',
  templateUrl: './explore-city.component.html',
  styleUrls: ['./explore-city.component.scss']
})
export class ExploreCityComponent {
  @Input() city!: string;
  currentCategory: Category = {
    name: 'test',
    items: [
      {
        name: 'test',
        description: 'test',
        link: '',
        imageUrl: 'assets/bar-chart.svg',
        imageAltText: 'test'
      }
    ]
  }

  showCategory(category: Category) {
    this.currentCategory = category
  }
}
