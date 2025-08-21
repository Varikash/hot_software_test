import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-close-icon',
    standalone: true,
    templateUrl: './close-icon.html'
  })
  export class CloseIconComponent {
    @Input() isOpen: boolean = false;
  }