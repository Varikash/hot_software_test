import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, PageId } from '../../constants/pages-data';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './side-menu.html'
})
export class SideMenuComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() activePage: PageId = 'terms';
    
  @Output() pageChange = new EventEmitter<PageId>();
    
  onPageClick(pageId: PageId) {
    this.pageChange.emit(pageId);
  }
}