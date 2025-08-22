import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsSectionComponent } from '../tems-section/terms-section';
import { SECTIONS_DATA } from '../../constants/accordion-data';

@Component({
  selector: 'app-terms-container',
  standalone: true,
  imports: [CommonModule, TermsSectionComponent],
  templateUrl: './terms-container.html'
})
export class TermsContainerComponent {
  sectionsData = SECTIONS_DATA;
  
  // Глобальное состояние открытого аккордеона
  openAccordionId: string | null = null;
  
  // Обработчик клика по аккордеону
  onAccordionToggle(sectionIndex: number, accordionIndex: number) {
    const accordionId = `${sectionIndex}-${accordionIndex}`;
    
    if (this.openAccordionId === accordionId) {
      // Если кликаем по уже открытому - закрываем
      this.openAccordionId = null;
    } else {
      // Если кликаем по другому - закрываем предыдущий и открываем новый
      this.openAccordionId = accordionId;
    }
  }
  
  // Проверяем, открыт ли конкретный аккордеон
  isAccordionOpen(sectionIndex: number, accordionIndex: number): boolean {
    return this.openAccordionId === `${sectionIndex}-${accordionIndex}`;
  }
}