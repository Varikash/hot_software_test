import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TermsSectionComponent } from './сomponents/tems-section/terms-section';
import { SECTIONS_DATA } from './constants/accordion-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TermsSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
  sectionsData = SECTIONS_DATA;
}