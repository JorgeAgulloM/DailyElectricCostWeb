import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  private lastImageShow = 0;

  cardData = [
    {
      image: './assets/img/captures/low/image_01_low.jpg',
      image_lager: './assets/img/captures/image_01_mid.jpg',
      title: "Precios de un solo vistazo",
      active: false
    },
    {
      image: './assets/img/captures/low/image_02_low.jpg',
      image_lager: './assets/img/captures/image_02_mid.jpg',
      title: "Establece alertas",
      active: false
    },
    {
      image: './assets/img/captures/low/image_07_low.jpg',
      image_lager: './assets/img/captures/image_07_mid.jpg',
      title: "Moodo oscuro",
      active: false
    },
    {
      image: './assets/img/captures/low/image_04_low.jpg',
      image_lager: './assets/img/captures/image_04_mid.jpg',
      title: "Como se crea tu energía",
      active: false
    },
    {
      image: './assets/img/captures/low/image_05_low.jpg',
      image_lager: './assets/img/captures/image_05_mid.jpg',
      title: "Históarico diario",
      active: false
    },
  ];
  

  changeState(select: number): void {
    switch(select) {
      case 0:
        this.cardData[0].active = !this.cardData[0].active
        this.lastImageShow = 0
      break;
      case 1:
        this.cardData[1].active = !this.cardData[1].active
        this.lastImageShow = 1
      break;
      case 2:
        this.cardData[2].active = !this.cardData[2].active
        this.lastImageShow = 2
      break;
      case 3:
        this.cardData[3].active = !this.cardData[3].active
        this.lastImageShow = 3
      break;
      case 4:
        this.cardData[4].active = !this.cardData[4].active
        this.lastImageShow = 4
      break;
      default:
        console.log("Error image number");
    }
  };

  closeModal(): void {
    this.changeState(this.lastImageShow);
  }


}
