import { Injectable } from '@angular/core';
import { SocialNetwork } from '../models/social-networks';
import { GOOGLE_PLAY_APP_LINK, INSTAGRAM_ACCOUNT_LINK, TWITTER, TWITTER_ACCOUNT_LINK, YOUTUBE_ACCOUNT_LINK } from './../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class CommonActionsService {

  goToGooglePlay(): void {
    this.goToSomewere(GOOGLE_PLAY_APP_LINK);
  }

  goToSocialNetworks(socialNetwork: string): void {
    console.log(`[common-service] -> goToSocialNetworks: Recive ${socialNetwork}`)
    switch (socialNetwork) {
      case SocialNetwork.twitter:
        this.goToSomewere(TWITTER_ACCOUNT_LINK);
        break;
      case SocialNetwork.youtube:
        this.goToSomewere(YOUTUBE_ACCOUNT_LINK);
        break;
      case SocialNetwork.instagram:
        this.goToSomewere(INSTAGRAM_ACCOUNT_LINK);
        break;
      default:
        console.log('Not search Social Network')
    }
  }

  showFormContact(): void {
    console.log('Todavia no está listo')
  }

  private goToSomewere(link: string): void {
    if (this.isGoogdLink(link)) {
      window.open(link, '_blanck')
    }
  }

  private isGoogdLink(link: string): boolean {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(link);
  }
}
