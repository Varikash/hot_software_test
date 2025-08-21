import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from '../close-icon/close-icon';
import { AccordionContentComponent } from '../accordion-content/accordion-content';

interface AccordionItem {
  number: string;
  text: string;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, CloseIconComponent, AccordionContentComponent],
  templateUrl: './accordion.html'
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;
  @Input() mainText: string = '';
  @Input() items: AccordionItem[] = [];
  @Output() toggleEvent = new EventEmitter<void>();

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleEvent.emit();
  }
}