import { Component, OnInit } from '@angular/core';
import { CommonActionsService } from '../../services/common/common-actions.service';

@Component({
  selector: 'app-use-terms',
  standalone: true,
  imports: [],
  templateUrl: './use-terms.component.html',
  styleUrl: './use-terms.component.css'
})
export class UseTermsComponent implements OnInit{

  useTermFile: string | undefined;
  showUseTermsFile: boolean = false;

  constructor(private service: CommonActionsService) {}

  ngOnInit(): void {
    this.getUseTermsText();
  }

  getUseTermsText(): void {
    if (!this.showUseTermsFile) {
      this.service.readUseTerms()
      .then(content => this.useTermFile = content)
      .catch(error => console.log('Error reading file:', error))
      .finally(() => {
        this.showUseTermsFile = true;
        console.log('text:', this.useTermFile)
      });
    }
  }

  closeUseTerms(event: MouseEvent): void {
    event.preventDefault();
    this.showUseTermsFile = false;
    this.useTermFile = undefined;
    this.service.toggleUseTermsFormVisibility(false);
  }

}
