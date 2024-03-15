import { Component } from "@angular/core";
import { CommonActionsService } from "../../services/common-actions.service";
import { BackendService } from "../../services/backend/backend.service";
import { FormData } from "../../models/form-data";
import { FormsModule } from "@angular/forms";
import { NgClass, NgIf } from "@angular/common";
import Swal from "sweetalert2";

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
    this.backedSrv.sendContactDeveloper(this.formData).subscribe({
      next: () =>
        Swal.fire({
          title: "Formulario enviado!",
          text: "Gracias, nos pondremos en contacto lo antes posible.",
          icon: "success",
        }),
      error: () =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        }),
    });

    this.formData.email = "";
    this.formData.name = "";
    this.formData.content = "";

    this.closeContactForm();
  }

  closeContactForm(): void {
    this.service.toggleContactFormVisibility(false);
  }
}
