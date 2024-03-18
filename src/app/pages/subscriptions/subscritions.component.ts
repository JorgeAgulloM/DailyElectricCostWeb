import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend/backend.service';
import { CommonActionsService } from '../../services/common-actions.service';

@Component({
  selector: 'app-subscritions',
  standalone: true,
  imports: [],
  templateUrl: './subscritions.component.html',
  styleUrl: './subscritions.component.css'
})
export class SubscritionsComponent implements OnInit {
  @Input('code') code!: string;
  
  subscriberEmail: string = '';
  responseOfSubscription: string = '';
  isCanceled: boolean = false;

  constructor(
    private service: CommonActionsService,
    private backendSrv: BackendService
  ) {}

  ngOnInit(): void {
    if (this.subscriberEmail == ''){
      this.getEmail();
      this.acivateSubscription();
    }
  }

  cancelSubscrition(event: MouseEvent): void {
    event.preventDefault();
    this.backendSrv.sendCancelSubscriber(this.code).subscribe({
      next: ((response) => {
        this.isCanceled = true;
        
        if (typeof response?.message !== 'undefined') {
          this.responseOfSubscription = response.message;
        } else if (typeof response?.warning !== 'undefined') {
          this.responseOfSubscription = response.warning;
        } else if (typeof response?.error !== 'undefined') {
          this.responseOfSubscription = response.error;
        } else {
          this.responseOfSubscription = response.error;
        }
      }),
      error: ((error) => {
        this.responseOfSubscription = error.error;
      })
    })
  }

  reactiveSubscription(event: MouseEvent): void {
    event.preventDefault();
    this.acivateSubscription();
  }

  private getEmail(): void {
    this.backendSrv.getEmailSubscriptor(this.code).subscribe({
      next: (response => this.subscriberEmail = response.message)
    });
  }

  private acivateSubscription(): void {
    this.backendSrv.sendActivateSubscriber(this.code).subscribe({
      next: ((response) => {
        this.isCanceled = false;

        if (typeof response?.message !== 'undefined') {
          this.responseOfSubscription = response.message;
        } else if (typeof response?.warning !== 'undefined') {
          this.responseOfSubscription = response.warning;
        } else if (typeof response?.error !== 'undefined') {
          this.responseOfSubscription = response.error;
        } else {
          this.responseOfSubscription = response.error;
        }
      }),
      error: ((error) => {
        this.responseOfSubscription = error.error;
      })
    })
  }

  goToPrivacyPolicy(event: MouseEvent): void {
    event.preventDefault();
    this.service.goToPrivacyPolicy();
  }

  goToGooglePlay(event: MouseEvent): void {
    event.preventDefault();
    this.service.goToGooglePlay();
  }

}
