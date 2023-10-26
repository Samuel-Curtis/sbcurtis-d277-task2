import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Category, Item } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-category',
  templateUrl: './city-category.component.html',
  styleUrls: ['./city-category.component.scss']
})
export class CityCategoryComponent implements OnChanges {
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

  @Input() currentCategory!: Category;
  currentItems: Item[] = this.categories[0].items!;
  
  ngOnChanges(): void {
    this.currentItems = this.currentCategory.items!
  }

  
}
