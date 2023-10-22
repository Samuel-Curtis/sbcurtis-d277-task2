import { Component } from '@angular/core';

@Component({
  selector: 'app-state-fun-facts',
  templateUrl: './state-fun-facts.component.html',
  styleUrls: ['./state-fun-facts.component.scss']
})
export class StateFunFactsComponent {

  currentFactIndex: number = 0;
  funFactsClosed: boolean = false;
  funFactsWidth: string = "12rem"

  funFacts = [
    {
      content: 'Fun Fact 1'
    },
    {
      content: 'Fun Fact 2'
    },
    {
      content: 'Fun Fact 3'
    },
    {
      content: 'Fun Fact 4'
    },
  ]

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
