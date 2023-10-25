import { Component } from '@angular/core';
import { WhyVirginiaTile } from '../../models/why-virginia-tile.interface';

@Component({
  selector: 'app-why-virginia-section',
  templateUrl: './why-virginia-section.component.html',
  styleUrls: ['./why-virginia-section.component.scss']
})
export class WhyVirginiaSectionComponent {
  header: string = 'Why Virginia';

  // Pull from data
  tiles: WhyVirginiaTile[] = [
    {
      title: 'tile 1 title',
      content: 'tile 1 content',
      imageUrl: 'assets/bar-chart.svg',
      imageAltText: 'tile 1 alt text'
    },
    {
      title: 'tile 2 title',
      content: 'tile 2 content',
      imageUrl: 'assets/bar-chart.svg',
      imageAltText: 'tile 2 alt text'
    },
    {
      title: 'tile 3 title',
      content: 'tile 3 content',
      imageUrl: 'assets/bar-chart.svg',
      imageAltText: 'tile 3 alt text'
    },
  ]
}
