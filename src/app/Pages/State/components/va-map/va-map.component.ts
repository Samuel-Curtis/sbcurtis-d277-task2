import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-va-map',
  templateUrl: './va-map.component.html',
  styleUrls: ['./va-map.component.scss']
})
export class VaMapComponent {

  @Output() openModal = new EventEmitter<string>();

  toggleOpenModal(city: string) {
    this.openModal.emit(city)
  }
}
