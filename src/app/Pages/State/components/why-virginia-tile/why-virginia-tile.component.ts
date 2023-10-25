import { Component, Input } from '@angular/core';
import { WhyVirginiaTile } from '../../models/why-virginia-tile.interface';

@Component({
  selector: 'app-why-virginia-tile',
  templateUrl: './why-virginia-tile.component.html',
  styleUrls: ['./why-virginia-tile.component.scss']
})
export class WhyVirginiaTileComponent {
  @Input() tile!: WhyVirginiaTile;
}
