import { Component } from '@angular/core';
import { TWITTER, YOUTUBE, INSTAGRAM } from '../../constants/constants';
import { CommonActionsService } from '../../services/common-actions.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number;
  useTermFile: string | undefined;
  showUseTermsFile: boolean = false;

  constructor(
    private service: CommonActionsService) {
    this.currentYear = new Date().getFullYear();
  }

  twitter = TWITTER;
  youtube = YOUTUBE;
  instagram = INSTAGRAM;

  goToGooglePlay(): void {
    this.service.goToGooglePlay();
  }

  goToFormContact(): void {
    this.service.showFormContact();
  }

  goToSocialNetwork(social: string): void {
    this.service.goToSocialNetworks(social);
  }

  goToPrivacyPolicy(): void {
    this.service.goToPrivacyPolicy();
  }

  getUseTermsText(): void {
    if (this.showUseTermsFile) {
      this.closeUseTerms();
    } else {
      this.service.readUseTerms()
      .then(content => {
        this.useTermFile = content;
      })
      .catch(error => console.log('Error reading file:', error))
      .finally(() => {
        this.showUseTermsFile = true;
        console.log('text:', this.useTermFile)
      });
    }
  }

  closeUseTerms(): void {
    this.showUseTermsFile = false;
    this.useTermFile = undefined;
  }

}
