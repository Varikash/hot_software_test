import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './сomponents/accordion/accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccordionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
  
  mainText = "We've made registering at our casino as easy as possible so you don't have to go through any hassles and formalities. Registering takes only a few seconds and then you can start enjoying many bonuses and offers at.";
  
  rulesList = [
    { number: '1.1', text: 'The first deposit <strong class="font-semibold">bonus is 100% up to €200 + 70 Free Spins.</strong>' },
    { number: '1.2', text: 'To receive a <strong class="font-semibold">100% bonus</strong> on the first deposit, players must deposit at least <strong class="font-semibold">€20</strong>.' },
    { number: '1.3', text: 'To receive a <strong class="font-semibold">100% bonus and 70 Free Spins</strong> on the first deposit, players need to make a <strong class="font-semibold">deposit of €50 or more</strong>.' }
  ];
}