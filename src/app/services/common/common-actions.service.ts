import { Injectable } from '@angular/core';
import { SocialNetwork } from '../../models/social-networks';
import { GOOGLE_PLAY_APP_LINK, INSTAGRAM_ACCOUNT_LINK, PRIVACY_POLICY_LINK, TWITTER_ACCOUNT_LINK, YOUTUBE_ACCOUNT_LINK } from '../../constants/constants';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonActionsService {

  private formContactVisibility = new Subject<boolean>();
  private useTermsVisibility = new Subject<boolean>();

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
        console.log('Not search Social Network');
    }
  }

  goToPrivacyPolicy(): void {
    this.goToSomewere(PRIVACY_POLICY_LINK);
  }

  async readUseTerms(): Promise<string> {
    const filePath = './assets/docs/useTerms.txt';
    const res = await fetch(filePath);
    return await res.text();
  }

  toggleContactFormVisibility(show: boolean) {
    this.formContactVisibility.next(show);
  }

  getContactFormVisibility(): Observable<boolean> {
    return this.formContactVisibility.asObservable();
  }
  
  toggleUseTermsFormVisibility(show: boolean) {
    this.useTermsVisibility.next(show);
  }

  getUseTermsVisibility(): Observable<boolean> {
    return this.useTermsVisibility.asObservable();
  }

  private goToSomewere(link: string): void {
    if (this.isGoogdLink(link)) {
      window.open(link, '_blanck');
    }
  }

  private isGoogdLink(link: string): boolean {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(link);
  }

}
