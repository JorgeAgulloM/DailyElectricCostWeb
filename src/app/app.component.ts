import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Electric Cost. Hello';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spring Boot'];

  setEnabled(): void { this.enabled = !this.enabled; }
}
