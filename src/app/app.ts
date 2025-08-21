import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './сomponents/accordion/accordion';
import { ACCORDION_DATA } from './constants/accordion-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AccordionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
  accordionData = ACCORDION_DATA;
}