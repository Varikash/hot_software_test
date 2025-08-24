import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsContainerComponent } from '../terms-container/terms-container';
import { SideMenuComponent } from '../side-menu/side-menu';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper';
import { PAGES_DATA, PageId, MenuItem } from '../../constants/pages-data';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, TermsContainerComponent, SideMenuComponent, ContentWrapperComponent],
    templateUrl: './main-layout.html'
  })
  export class MainLayoutComponent {
    activePage: PageId = 'terms';
    menuItems: MenuItem[] = PAGES_DATA;
    
    onPageChange(pageId: PageId) {
      this.activePage = pageId;
    }
  }