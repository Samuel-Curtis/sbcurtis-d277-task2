import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state-header',
  templateUrl: './state-header.component.html',
  styleUrls: ['./state-header.component.scss']
})
export class StateHeaderComponent {
  @Input() header: string = '';
}
