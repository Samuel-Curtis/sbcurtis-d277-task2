import { Component } from '@angular/core';

@Component({
  selector: 'app-city-category',
  templateUrl: './city-category.component.html',
  styleUrls: ['./city-category.component.scss']
})
export class CityCategoryComponent {

  categories = [
    {
      img: 'assets/bar-chart.svg',
      description: 'description 1'
    },
    {
      img: 'assets/bar-chart.svg',
      description: 'description 2'
    },
    {
      img: 'assets/bar-chart.svg',
      description: 'description 3'
    }
  ]
}
