import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SubscritionsComponent } from './pages/subscriptions/subscritions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'subscriptions/:code', component: SubscritionsComponent }
];
