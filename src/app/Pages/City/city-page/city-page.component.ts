import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CityData } from 'src/app/Shared/model/city-data.interface';
import { lynchburgData, richmondData, roanokeData } from 'src/assets/data/data';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {
  @Input() city!: string;

  currentCity!: CityData | null;
  cityFunFacts!: string[];

  cities: CityData[] = [
    richmondData.data,
    roanokeData.data,
    lynchburgData.data
  ]

  constructor(public activatedRoute: ActivatedRoute, public titleService: Title) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.city = data['city']
      this.titleService.setTitle(this.city)
      this.setCurrentCity()
    })
  }

  setCurrentCity(): void {
    this.currentCity = this.cities.find((data) => data.name == this.city) || null
    this.cityFunFacts = this.currentCity?.funFacts || [];
    
  }
}
