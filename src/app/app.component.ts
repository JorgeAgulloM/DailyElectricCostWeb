import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaComponent } from './components/media/media.component';
import { AppFeaturesComponent } from './components/app-features/app-features.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFromComponent } from './components/contact-from/contact-from.component';
import { CommonActionsService } from './services/common-actions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, HeaderComponent, MediaComponent, AppFeaturesComponent, FooterComponent, ContactFromComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  showContactForm: boolean = false;
  private subscription: Subscription | undefined;

  constructor(private service: CommonActionsService) {}

  ngOnInit(): void {
    this.subscription = this.service.getContactFormVisibility().subscribe((show: boolean) => {
      console.log(`AppComponent -> ngOnInit`)
      this.showContactForm = show;
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
