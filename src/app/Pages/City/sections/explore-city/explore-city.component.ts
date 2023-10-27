import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category, CityData } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-explore-city',
  templateUrl: './explore-city.component.html',
  styleUrls: ['./explore-city.component.scss']
})
export class ExploreCityComponent implements OnInit, OnChanges {
  @Input() city!: CityData;
  currentCategory!: Category;

  ngOnInit(): void {
    this.currentCategory = this.city.categories![0]
  }

  // THIS FIXED IT!
  ngOnChanges(changes: SimpleChanges): void {
    this.currentCategory = this.city.categories![0]
  }

  showCategory(category: Category) {
    let newCategory = this.city.categories?.find(data => data.name == category.name )
    if (newCategory) {
      this.currentCategory = newCategory
    }
  }
}
