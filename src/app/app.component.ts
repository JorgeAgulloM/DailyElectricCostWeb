import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Electric Cost. Hello';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spring Boot'];

  setEnabled(): void { this.enabled = !this.enabled; }
}
