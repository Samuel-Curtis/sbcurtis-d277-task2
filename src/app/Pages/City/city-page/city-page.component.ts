import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Shared/model/city-data.interface';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {
  @Input() city!: string;
  
  // Pull from data
  cityFunFacts = [
    'City Fun Fact 1',
    'City Fun Fact 2',
    'City Fun Fact 3',
    'City Fun Fact 4',
    'City Fun Fact 5',
  ]

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.city = data['city']
    })
  }
}
