import { Component } from '@angular/core';
import { ContentWrapperComponent } from "../content-wrapper/content-wrapper";

@Component({
  selector: 'app-install-promo',
  standalone: true,
  imports: [ContentWrapperComponent],
  templateUrl: './install-promo.html',
})
export class InstallPromoComponent {
}