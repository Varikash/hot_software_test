import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TermsContainerComponent } from './сomponents/terms-container/terms-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TermsContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
}