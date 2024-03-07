import { Component } from '@angular/core';
import { CommonActionsService } from '../../services/common-actions.service';
import { INSTAGRAM, TWITTER, YOUTUBE } from '../../constants/constants';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  constructor(private service: CommonActionsService) {}

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
