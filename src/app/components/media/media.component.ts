import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { distinctUntilChanged, tap } from "rxjs";

@Component({
  selector: "app-media",
  standalone: true,
  imports: [],
  templateUrl: "./media.component.html",
  styleUrl: "./media.component.css",
})
export class MediaComponent implements OnInit {
  private lastImageShow = 0;
  private Breakpoints = Breakpoints;
  private currentBreakpoint: string = "";
  private limitLarge: string = "(min-width: 865px)";

  constructor(private breakpointObserver: BreakpointObserver) {}

  cardData = [
    {
      image: "./assets/img/captures/low/image_01_low.jpg",
      image_lager: "./assets/img/captures/image_01_mid.jpg",
      title: "Precios de un solo vistazo",
      text: "Podrás revisar todos lo precios del día de una forma fácil y rápida para decidir a que horas debe usar tus electrodomésticos.",
      active: false,
    },
    {
      image: "./assets/img/captures/low/image_02_low.jpg",
      image_lager: "./assets/img/captures/image_02_mid.jpg",
      title: "Establece alertas",
      text: "Podrás establecer tus alertas para los precios que desees de todo el día. Además, a partir de las 20:30 R.E.E publica los precios del día siguiete y podrás establecer alertas para mañana.",
      active: false,
    },
    {
      image: "./assets/img/captures/low/image_07_low.jpg",
      image_lager: "./assets/img/captures/image_07_mid.jpg",
      title: "Modo oscuro",
      text: "¿Te molesta la luz? a nosotros también, por eso todas nuestras apps posen el ajuste de modo oscuro tanto manual como automático.",
      active: false,
    },
    {
      image: "./assets/img/captures/low/image_04_low.jpg",
      image_lager: "./assets/img/captures/image_04_mid.jpg",
      title: "Cómo se crea tu energía",
      text: "Averigüa de un vistazo como se genera la luz que estás consumiendo, no es muy útil para tu día a día pero es interesante.",
      active: false,
    },
    {
      image: "./assets/img/captures/low/image_05_low.jpg",
      image_lager: "./assets/img/captures/image_05_mid.jpg",
      title: "Histórico diario",
      text: "Otra forma de ver los precios diários y los días anteriores.",
      active: false,
    },
  ];

  changeState(select: number): void {
    if (this.currentBreakpoint === this.limitLarge) switch (select) {
        case 0:
          this.cardData[0].active = !this.cardData[0].active;
          this.lastImageShow = 0;
          break;
        case 1:
          this.cardData[1].active = !this.cardData[1].active;
          this.lastImageShow = 1;
          break;
        case 2:
          this.cardData[2].active = !this.cardData[2].active;
          this.lastImageShow = 2;
          break;
        case 3:
          this.cardData[3].active = !this.cardData[3].active;
          this.lastImageShow = 3;
          break;
        case 4:
          this.cardData[4].active = !this.cardData[4].active;
          this.lastImageShow = 4;
          break;
        default:
          console.log("Error image number");
      }
  }

  closeModal(): void {
    this.changeState(this.lastImageShow);
  }

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

/**  
 *   readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
  );
 * 
 * 
 * private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
    } else if (this.breakpointObserver.isMatched('(min-width: 500px)')) {
      this.currentBreakpoint = '(min-width: 500px)';
    }
  } */
