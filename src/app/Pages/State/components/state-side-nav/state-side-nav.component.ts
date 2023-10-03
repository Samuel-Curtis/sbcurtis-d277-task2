import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state-side-nav',
  templateUrl: './state-side-nav.component.html',
  styleUrls: ['./state-side-nav.component.scss']
})
export class StateSideNavComponent {

  showSidenav: boolean = true;
}
