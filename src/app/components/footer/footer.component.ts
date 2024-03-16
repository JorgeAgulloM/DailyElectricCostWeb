import { Component } from '@angular/core';
import { TWITTER, YOUTUBE, INSTAGRAM } from '../../constants/constants';
import { CommonActionsService } from '../../services/common-actions.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { BackendService } from '../../services/backend/backend.service';

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

  private send = 0;

  constructor(
    private service: CommonActionsService,
    private backendSrv: BackendService  
  ) {
    this.currentYear = new Date().getFullYear();
  }

  twitter = TWITTER;
  youtube = YOUTUBE;
  instagram = INSTAGRAM;

  subscribeEmail(): void {
    this.send = 1;
    Swal.fire({
      title: "Subscripción!",
      html: "Un momento por favor, estamos registrando su solicitud...",
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.backendSrv.sendSetSubscrition(this.emailValue).subscribe({
      next: (response => {
        if (typeof response?.message !== 'undefined') {
          this.createSwalMessage(response.message, "success")
        } else if (typeof response?.warning !== 'undefined') {
          this.createSwalMessage(response.warning, "warning")
        } else if (typeof response?.error !== 'undefined') {
          this.createSwalMessage(response.error, 'error')
        } else {
          this.createSwalMessage('Error desconocido', 'error')
        }
      }),
      error: (() => this.createSwalMessage('Error al intentar realizar la subscripción!.\n Lo sentimos, intentelo más adelante.', 'error'))
    })

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

  createSwalMessage(text: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title: "Subscripción!",
      text: text,
      icon: icon
    });
  }

}
