import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { distinctUntilChanged, tap } from "rxjs";
@Component({
  selector: "app-app-features",
  standalone: true,
  imports: [],
  templateUrl: "./app-features.component.html",
  styleUrl: "./app-features.component.css",
})
export class AppFeaturesComponent implements OnInit {
  private Breakpoints = Breakpoints;
  public currentBreakpoint: string = "";
  public limitLarge: string = "(min-width: 865px)";

  constructor(private breakpointObserver: BreakpointObserver) {}

  changeState(select: number) {
    this.cardData.forEach((card, index) => {
      console.log(`card: ${card.title} is ${card.active}. Index: ${index}`)
      if (select == index) {
        console.log(`select == index: ${select == index}`)
        card.active = !card.active;
        console.log(`!card.active: ${!card.active}`)
        console.log(`card.active: ${card.active}`)
      } else {
        card.active = false;
      }
    });
  }

  cardData = [
    {
      faIcon: "fa fa-bar-chart",
      title: "Tiempo Real",
      active: false,
      text: "Revisa los precios establecidos para hoy y para mañana.",
      textLarge: "Con DailyElectricCost, obtendrás los precios del día, lo que te permitirá elegir la mejor hora para conectar tus electrodomésticos y, así, ahorrar un poco en tu factura. Además, a partir de las 20:30 aproximadamente, podrás revisar los precios del día siguiente y establecer alertas para los que elijas."
    },
    {
      faIcon: "fa fa-eye",
      title: "Sencillez",
      active: false,
      text: "El coste diario de tu energía de un solo vistazo.",
      textLarge: "Queremos simplificarte la vida. Con un solo vistazo, podrás visualizar todos los precios del día por hora. Además, encontrarás una sección dedicada a mostrarte las franjas del día con los mejores precios."
    },
    {
      faIcon: "fa fa-bell",
      title: "Alertas",
      active: false,
      text: "Podrás establecer alertas para tus horas favoritas.",
      textLarge: "Nuestro día a día es muy estresante. ¿Quién recuerda cuándo es mejor o peor poner una lavadora o encender la calefacción? En DailyElectricCost te lo ponemos fácil. Simplemente selecciona la hora a la que deseas prestar atención y activa la alerta en el menú inferior. Minutos antes de esa hora, te recordaremos mediante una notificación."
    },
    {
      faIcon: "fa fa-gear",
      title: "Custom",
      active: false,
      text: "Personaliza la app usando el modo oscuro y los colores de tu dispositivo.",
      textLarge: "Puedes personalizar la aplicación utilizando el modo oscuro o manteniendo el modo automático. DailyElectricCost se adaptará al estado de tu dispositivo. Además, si cuentas con una versión de Android 12L o superior, podrás aplicar los colores de tu dispositivo."
    },
    {
      faIcon: "fa fa-pencil",
      title: "Compromiso",
      active: false,
      text: "Compromiso con la transparencia. Somos tu fuente confiable de información energética española.",
      textLarge: "Daily Electric Cost te da la bienvenida ofreciéndote información en tiempo real sobre el coste y la red eléctrica en España. Nos comprometemos a ser transparentes y a garantizar que la información que recibes proviene de una fuente confiable, la Red Eléctrica de España (REE), el operador del sistema eléctrico español. \n\n" +
                "Nuestra aplicación obtiene datos a través del API proporcionado por la REE, lo que nos permite ofrecerte información precisa y actualizada sobre el precio del kWh, la generación de energía, la disponibilidad de recursos renovables y otros indicadores relevantes para el suministro eléctrico. Esta información se presenta de manera clara y sencilla para facilitar tu comprensión. \n\n" +
                "Además, en Daily Electric Cost entendemos la importancia de proporcionarte una experiencia confiable y enriquecedora. Por ello, nos esforzamos por mantener nuestros datos actualizados y precisos, asegurándonos de obtenerlos directamente de la fuente oficial. Queremos que te sientas seguro al tomar decisiones informadas sobre tu consumo eléctrico. \n\n" +
                "En resumen, nuestra misión es brindarte una visión clara del panorama energético español para que puedas tomar decisiones informadas y estar al tanto de la situación general de la red eléctrica. Agradecemos tu confianza en Daily Electric Cost y estamos comprometidos a seguir trabajando arduamente para proporcionarte la mejor experiencia posible basada en información veraz y actualizada."
    },
  ];

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, this.limitLarge])
    .pipe(
      tap((value) => console.log(value)),
      distinctUntilChanged()
    );

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(this.limitLarge)) {
      this.currentBreakpoint = this.limitLarge;
    } else {
      this.currentBreakpoint = Breakpoints.Large;
    }
  }
}
