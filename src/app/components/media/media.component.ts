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
      image: './assets/img/captures/image_01.jpg',
      title: "Precios de un solo vistazo"
    },
    {
      image: './assets/img/captures/image_02.jpg',
      title: "Establece alertas"
    },
    {
      image: './assets/img/captures/image_07.jpg',
      title: "Moodo oscuro"
    },
    {
      image: './assets/img/captures/image_04.jpg',
      title: "Como se crea tu energía"
    },
    {
      image: './assets/img/captures/image_05.jpg',
      title: "Históarico diario"
    },
  ]
}
