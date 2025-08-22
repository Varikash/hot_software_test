import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion';

@Component({
    selector: 'app-terms-section',
    standalone: true,
    imports: [CommonModule, AccordionComponent],
    templateUrl: './terms-section.html'
  })
  export class TermsSectionComponent {
    @Input() sectionTitle: string = '';
    @Input() accordions: any[] = [];
  }