import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  goToGooglePlay(): void {
    window.open('https://play.google.com/store/apps/details?id=com.softyorch.dailyelectriccost', '_blanck')
  }


}
