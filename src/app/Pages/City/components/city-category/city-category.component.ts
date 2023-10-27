import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category, Item } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-category',
  templateUrl: './city-category.component.html',
  styleUrls: ['./city-category.component.scss']
})
export class CityCategoryComponent implements OnInit, OnChanges {

  @Input() currentCategory!: Category;
  currentItems!: Item[]
  
  ngOnInit(): void {
    this.currentItems = this.currentCategory.items!;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentItems = this.currentCategory.items!;
  }

}
