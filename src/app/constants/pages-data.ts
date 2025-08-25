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


export const GAMBLING_TEXT: string = "We at Service believe that gambling should be fun and free of harm and only done for entertainment purposes. Before you start playing at Service, it is very important to understand that gambling should never be viewed as a source of any kind of income or recipe to pay off your debts. We strongly recommend you to keep track of how much time you spend playing casino games and how much money you can afford yourself to spend on them. Although recommendations stated above might seem obvious for some of you, there are still certain percentages of players who lose control over such things when playing. If you think you might be one of those players and gambling has negative impact on your life or life of your family and friends, we can suggest you one of the following things: You can always contact our support department at support@service.com and ask to terminate your Service account for a certain period of time. After that we will take necessary measures to completely block you from our site and block any promotional emails that you might have been receiving from our casino before. Please contact the customer support team if you want to set a personal cooling-off period. You can also seek for help from professionals who deal with gambling problems: Gamblers Anonymous, GamCare, Gambling Therapy."