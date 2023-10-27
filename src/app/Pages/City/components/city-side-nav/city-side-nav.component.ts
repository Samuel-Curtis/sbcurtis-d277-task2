import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, CityData } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-side-nav',
  templateUrl: './city-side-nav.component.html',
  styleUrls: ['./city-side-nav.component.scss']
})
export class CitySideNavComponent implements OnInit {
  @Input() city!: CityData;
  @Output() showCategoryEmitter: EventEmitter<Category> = new EventEmitter<Category>();

  categories!: Category[];

  ngOnInit(): void {
    this.categories = this.city.categories!;
  }  

  showCategory(category: Category) {
    this.showCategoryEmitter.emit(category)
  }
}
