import { Component } from "@angular/core";
import { CommonActionsService } from "../../services/common-actions.service";
import { BackendService } from "../../services/backend/backend.service";
import { FormData } from "../../models/form-data";
import { FormsModule } from "@angular/forms";
import { NgClass, NgIf } from "@angular/common";
import Swal, { SweetAlertIcon } from "sweetalert2";

@Component({
  selector: "app-contact-from",
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: "./contact-from.component.html",
  styleUrl: "./contact-from.component.css",
})
export class ContactFromComponent {
  constructor(
    private service: CommonActionsService,
    private backedSrv: BackendService
  ) {}

  formData: FormData = {
    email: "",
    name: "",
    content: "",
  };

  ping(): void {
    this.backedSrv.sendPing().subscribe({
      next: (response) => console.log(`response: ${response.message}`),
      error: (error) => console.log(`error: ${error.error}`)
    });
  }

  onSubmit(): void {
    Swal.fire({
      title: "Contacto con Desarrollador!",
      html: "Un momento por favor, estamos enviando su solicitud...",
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.backedSrv.sendContactDeveloper(this.formData).subscribe({
      next: (() => this.createSwalMessage('Gracias, nos pondremos en contacto lo antes posible.', 'success')),
      error: (() => this.createSwalMessage('Ooops... Algo ha salido mal!', 'error'))
    });

    this.formData.email = "";
    this.formData.name = "";
    this.formData.content = "";

    this.closeContactForm();
  }

  closeContactForm(): void {
    this.service.toggleContactFormVisibility(false);
  }

  private createSwalMessage(text: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title: "Contacto con Desarrollador!",
      text: text,
      icon: icon,
    })
  }
}
