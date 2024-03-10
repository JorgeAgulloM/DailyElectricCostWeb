import { Component } from '@angular/core';
import { TWITTER, YOUTUBE, INSTAGRAM } from '../../constants/constants';
import { CommonActionsService } from '../../services/common-actions.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  emailValue: string = '';
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

  subscribeEmail(): void {
    Swal.fire({
      title: "No disponible!",
      text: "Lo sentimos, este servicio no está disponible por el momento.",
      icon: "warning"
    });
    this.emailValue = '';
  }

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

  goToPrivacyPolicy(event: MouseEvent): void {
    event.preventDefault();
    this.service.goToPrivacyPolicy();
  }

  getUseTermsText(event: MouseEvent): void {
    event.preventDefault();
    if (this.showUseTermsFile) {
      this.closeUseTerms(event);
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

  closeUseTerms(event: MouseEvent): void {
    event.preventDefault();
    this.showUseTermsFile = false;
    this.useTermFile = undefined;
  }

}
