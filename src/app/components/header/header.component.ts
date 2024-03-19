import { Component } from '@angular/core';
import { CommonActionsService } from '../../services/common/common-actions.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private service: CommonActionsService) { }

  goToGooglePlay(): void {
    this.service.goToGooglePlay();
  }

  nextToReading(): void {
    console.log('Estamos trabajando en ello!')
  }
  
}
