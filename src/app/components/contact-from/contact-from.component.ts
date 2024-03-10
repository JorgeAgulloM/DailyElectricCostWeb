import { Component } from '@angular/core';
import { CommonActionsService } from '../../services/common-actions.service';
import { FormData } from '../../models/form-data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-from',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-from.component.html',
  styleUrl: './contact-from.component.css'
})
export class ContactFromComponent  {

  constructor(private service: CommonActionsService) {}

  formData: FormData = {
    email:  "",
    name: "",
    context: ""
  }

  onSubmit(): void {
    this.service.contactWithDeveloper(this.formData);
    this.formData.email = "";
    this.formData.name = "";
    this.formData.context = "";
    this.closeContactForm();
  }

  closeContactForm(): void {
    this.service.toggleContactFormVisibility(false);
  }

}