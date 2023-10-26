import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more-section',
  templateUrl: './learn-more-section.component.html',
  styleUrls: ['./learn-more-section.component.scss']
})
export class LearnMoreSectionComponent {
  header: string = 'Learn More';

  submitted: boolean = false;

  email!: string;
  confirmEmail!: string;
  emailsMatch: boolean = true;

  checkEmails(): void {
    this.emailsMatch = this.email == this.confirmEmail
  }

  submit(): void {
    this.submitted = true;
  }
}
