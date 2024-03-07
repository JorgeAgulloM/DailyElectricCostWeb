import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  cardData = [
    {
      image: './assets/img/captures/low/image_01_low.jpg',
      title: "Precios de un solo vistazo"
    },
    {
      image: './assets/img/captures/low/image_02_low.jpg',
      title: "Establece alertas"
    },
    {
      image: './assets/img/captures/low/image_07_low.jpg',
      title: "Moodo oscuro"
    },
    {
      image: './assets/img/captures/low/image_04_low.jpg',
      title: "Como se crea tu energía"
    },
    {
      image: './assets/img/captures/low/image_05_low.jpg',
      title: "Históarico diario"
    },
  ]
}
