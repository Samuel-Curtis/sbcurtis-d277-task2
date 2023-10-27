import { Component } from '@angular/core';
import { WhyVirginiaTile } from '../../models/why-virginia-tile.interface';
import { stateData } from 'src/assets/data/data';

@Component({
  selector: 'app-why-virginia-section',
  templateUrl: './why-virginia-section.component.html',
  styleUrls: ['./why-virginia-section.component.scss']
})
export class WhyVirginiaSectionComponent {
  header: string = 'Why Virginia';

  // Pull from data
  tiles: WhyVirginiaTile[] = stateData.data.whyVirginiaTiles;
}
