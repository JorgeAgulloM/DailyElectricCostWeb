import { Component } from '@angular/core';

@Component({
  selector: 'app-app-features',
  standalone: true,
  imports: [],
  templateUrl: './app-features.component.html',
  styleUrl: './app-features.component.css'
})
export class AppFeaturesComponent {
  cardData = [
    {
      faIcon: "fa fa-bar-chart",
      title: "En Tiempo Real",
      text: "Revisa los precios establecidos para hoy, y para mañana."
    },
    {
      faIcon: "fa fa-eye",
      title: "Sencillez",
      text: "El coste diario de tu energía de un solo vistazo."
    },
    {
      faIcon: "fa fa-bell",
      title: "Alertas",
      text: "Podrás establecer alertas para tus horas favoritas."
    },
    {
      faIcon: "fa fa-gear",
      title: "Personalización",
      text: "Personaliza la app usando el modo oscuro y los colores de tu dispositivo."
    },
  ]
}

// <p>Podrás revisar el coste de mañana desde las 20:30 y establecer tus alertas.</p>
// <p>Consulta el coste medio del día con un solo clic.</p>
// <p>Podrás conocer cómo se produce tu energía y revisar su histórico.</p>
// <p>Personaliza la app usando el modo oscuro. Y desde Android 12L utilizando los colores de tu dispositivo.</p>