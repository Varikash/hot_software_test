import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion';
import { Accordion } from '../../constants/accordion-data';

@Component({
  selector: 'app-terms-section',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './terms-section.html'
})
export class TermsSectionComponent {
  @Input() sectionTitle: string = '';
  @Input() accordions: Accordion[] = [];
  @Input() sectionIndex: number = 0;
  @Input() openAccordionId: string | null = null;
  
  @Output() accordionToggle = new EventEmitter<{sectionIndex: number, accordionIndex: number}>();
  
  // Проверяем, открыт ли конкретный аккордеон в этой секции
  isAccordionOpen(accordionIndex: number): boolean {
    return this.openAccordionId === `${this.sectionIndex}-${accordionIndex}`;
  }
  
  // Обработчик клика по аккордеону
  onAccordionClick(accordionIndex: number) {
    this.accordionToggle.emit({
      sectionIndex: this.sectionIndex,
      accordionIndex: accordionIndex
    });
  }
}