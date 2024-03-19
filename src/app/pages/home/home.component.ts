import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFeaturesComponent } from '../../components/app-features/app-features.component';
import { ContactFromComponent } from '../../components/contact-from/contact-from.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MediaComponent } from '../../components/media/media.component';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { Subscription } from 'rxjs';
import { CommonActionsService } from '../../services/common/common-actions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, HeaderComponent, MediaComponent, AppFeaturesComponent, FooterComponent, ContactFromComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  showContactForm: boolean = false;
  private subscription: Subscription | undefined;

  constructor(private service: CommonActionsService) {}

  ngOnInit(): void {
    this.subscription = this.service.getContactFormVisibility().subscribe((show: boolean) => {
      this.showContactForm = show;
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
