export type PageId = 'terms' | 'privacy' | 'responsible' | 'bonus' | 'contact';
export type PageTitle = 'Terms and Conditions' | 'Privacy Policy' | 'Responsible Gaming' | 'Bonus Terms' | 'Contact Us';

export interface MenuItem {
  id: PageId;
  title: PageTitle;
}

export const PAGES_DATA: MenuItem[] = [
  { id: 'terms', title: 'Terms and Conditions' },
  { id: 'privacy', title: 'Privacy Policy' },
  { id: 'responsible', title: 'Responsible Gaming' },
  { id: 'bonus', title: 'Bonus Terms' },
  { id: 'contact', title: 'Contact Us' }
];