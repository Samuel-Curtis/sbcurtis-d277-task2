import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-side-nav',
  templateUrl: './city-side-nav.component.html',
  styleUrls: ['./city-side-nav.component.scss']
})
export class CitySideNavComponent {
  @Input() city!: string;
  @Output() showCategoryEmitter: EventEmitter<Category> = new EventEmitter<Category>();

  categories: Category[] = [
    {
      name: 'Dining',
      items: [
        {
          name: 'The Alamo',
          description: 'BBQ Joint',
          link: '',
          imageUrl: 'assets/bar-chart.svg',
          imageAltText: 'Picture of The Alamo BBQ'
        },
        {
          name: 'Fusion',
          description: 'Sushi Joint',
          link: '',
          imageUrl: 'assets/bar-chart.svg',
          imageAltText: 'Picture of Fusion Sushi'
        },
      ]
    },
    {
      name: 'Entertainment',
      items: [
        {
          name: 'Top Golf',
          description: 'Golfing and stuff',
          link: '',
          imageUrl: 'assets/bar-chart.svg',
          imageAltText: 'Picture of Top Golf'
        },
        {
          name: 'The Circuit',
          description: 'All you can drink meets all you can play retro arcade!',
          link: '',
          imageUrl: 'assets/bar-chart.svg',
          imageAltText: 'Picture of The Circuit'
        },
      ]
    }
  ]

  showCategory(category: Category) {
    this.showCategoryEmitter.emit(category)
  }
}
