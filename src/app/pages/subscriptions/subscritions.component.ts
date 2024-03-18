import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend/backend.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-subscritions',
  standalone: true,
  imports: [],
  templateUrl: './subscritions.component.html',
  styleUrl: './subscritions.component.css'
})
export class SubscritionsComponent implements OnInit {
  @Input('code') code!: string;
  
  
  responseOfSubscription: string = '';

  constructor(private backendSrv: BackendService) {}

  ngOnInit(): void {
    this.acivateSubscription();
  }

  //Buscar con el code el correo del usuario para mostrarlo

  acivateSubscription(): void {
    this.backendSrv.sendActivateSubscriber(this.code).subscribe({
      next: ((response) => {
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


}
