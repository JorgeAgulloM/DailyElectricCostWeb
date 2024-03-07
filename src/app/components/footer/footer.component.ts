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

  constructor(private service: CommonActionsService) {
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

}
