import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss']
})
export class FunFactsComponent {

  currentFactIndex: number = 0;
  funFactsClosed: boolean = false;
  funFactsWidth: string = "12rem"

  @Input() funFacts!: string[];

  getNextFact() {
    if ((this.currentFactIndex + 1) >= this.funFacts.length) {
      this.currentFactIndex = 0;
    } else {
      this.currentFactIndex += 1;
    }
  }

  getPreviousFact() {
    if ((this.currentFactIndex - 1) < 0) {
      this.currentFactIndex = this.funFacts.length - 1;
    } else {
      this.currentFactIndex -= 1;
    }
  }

  toggleFacts(): void {
    this.funFactsClosed = !this.funFactsClosed
    if (this.funFactsWidth == '12rem') {
      this.funFactsWidth = '0rem'
    } else {
      this.funFactsWidth = '12rem'
    }
  }
}
