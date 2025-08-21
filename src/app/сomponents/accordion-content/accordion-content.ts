import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccordionItem {
  number: string;
  text: string;
}

@Component({
  selector: 'app-accordion-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-content.html'
})
export class AccordionContentComponent {
  @Input() mainText: string = '';
  @Input() items: AccordionItem[] = [];
}