import { Component } from '@angular/core';
import { CommonActionsService } from '../../services/common/common-actions.service';
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

  goToGooglePlay(event: MouseEvent): void {
    event.preventDefault();
    this.service.goToGooglePlay();
  }

  showToFormContact(event: MouseEvent): void {
    event.preventDefault();
    this.service.toggleContactFormVisibility(true);
  }

  goToSocialNetwork(event: MouseEvent, social: string): void {
    event.preventDefault();
    this.service.goToSocialNetworks(social);
  }

}
