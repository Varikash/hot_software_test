import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './сomponents/main-layout/main-layout';
import { InstallPromoComponent } from "./сomponents/install-promo/install-promo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent, InstallPromoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
}