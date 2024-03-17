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

  constructor(private backendSrv: BackendService) {}

  ngOnInit(): void {
    this.acivateSubscription();
  }

  //Buscar con el code el correo del usuario para mostrarlo

  acivateSubscription(): void {
    this.backendSrv.sendActivateSubscriber(this.code).subscribe({
      next: (() => this.createSwalMessage('Tu subscripción ha sido activada!', 'success')),
      error: (() => this.createSwalMessage('Opsss!! Algo ha salido mal.', 'error'))
    })
  }

  private createSwalMessage(text: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title: "Subscripción!",
      text: text,
      icon: icon,
    })
  }
}
