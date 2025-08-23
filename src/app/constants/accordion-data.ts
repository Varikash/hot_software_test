export interface AccordionItem {
  number: string;
  text: string;
}

export interface Accordion {
  title: string;
  mainText: string;
  rulesList: AccordionItem[];
}

export interface Section {
  sectionTitle: string;
  accordions: Accordion[];
}

export const SECTIONS_DATA = [
    {
      sectionTitle: "Registration and Account",
      accordions: [
        {
          title: "General Rules",
          mainText: "We've made registering at our casino as easy as possible...",
          rulesList: [
            { number: '1.1', text: 'The first deposit <strong class="font-semibold">bonus is 100% up to €200 + 70 Free Spins.</strong>' },
            { number: '1.2', text: 'To receive a <strong class="font-semibold">100% bonus</strong> on the first deposit, players must deposit at least <strong class="font-semibold">€20</strong>.' },
            { number: '1.3', text: 'To receive a <strong class="font-semibold">100% bonus and 70 Free Spins</strong> on the first deposit, players need to make a <strong class="font-semibold">deposit of €50 or more</strong>.' }
          ]
        },
        {
          title: "Create an Account",
          mainText: "Creating an account with us is simple and secure...",
          rulesList: [
            { number: '2.1', text: 'Provide <strong class="font-semibold">accurate personal information</strong> including your full name, date of birth, and contact details.' },
            { number: '2.2', text: 'Choose a <strong class="font-semibold">strong password</strong> that includes letters, numbers, and special characters.' },
            { number: '2.3', text: 'Verify your <strong class="font-semibold">email address</strong> by clicking the confirmation link sent to your inbox.' },
            { number: '2.4', text: 'Complete the <strong class="font-semibold">identity verification process</strong> by uploading required documents.' }
          ]
        },
        {
            title: "Service Account Management",
            mainText: "Our account management system provides you with full control...",
            rulesList: [
              { number: '3.1', text: 'You can <strong class="font-semibold">update your personal details</strong> at any time through your account settings.' },
              { number: '3.2', text: 'Set up <strong class="font-semibold">deposit and withdrawal limits</strong> to manage your gaming budget effectively.' },
              { number: '3.3', text: 'Enable <strong class="font-semibold">two-factor authentication</strong> for enhanced account security.' },
              { number: '3.4', text: 'Access your <strong class="font-semibold">transaction history</strong> and gaming statistics anytime.' }
            ]
          },
          {
            title: "Account Settings",
            mainText: "Customize your account settings to personalize your gaming experience...",
            rulesList: [
              { number: '5.1', text: 'Configure <strong class="font-semibold">notification preferences</strong> for emails and SMS alerts.' },
              { number: '5.2', text: 'Set your <strong class="font-semibold">preferred currency</strong> and language settings.' },
              { number: '5.3', text: 'Manage your <strong class="font-semibold">payment methods</strong> and withdrawal options.' },
              { number: '5.4', text: 'Adjust <strong class="font-semibold">privacy settings</strong> and data sharing preferences.' }
            ]
          },
          {
            title: "Active and Inactive Accounts",
            mainText: "Understanding the status of your account helps you maintain access...",
            rulesList: [
              { number: '6.1', text: 'Your account remains <strong class="font-semibold">active</strong> as long as you log in at least once every 12 months.' },
              { number: '6.2', text: 'Inactive accounts may be <strong class="font-semibold">suspended</strong> after 12 months of no activity.' },
              { number: '6.3', text: 'To reactivate an inactive account, <strong class="font-semibold">contact our support team</strong> and verify your identity.' },
              { number: '6.4', text: 'Accounts with <strong class="font-semibold">pending withdrawals</strong> will not be suspended until the transaction is completed.' }
            ]
          },
          {
            title: "Responsible Gaming",
            mainText: "We are committed to promoting responsible gaming...",
            rulesList: [
              { number: '4.1', text: 'Set <strong class="font-semibold">daily, weekly, and monthly limits</strong> on your deposits and playing time.' },
              { number: '4.2', text: 'Use our <strong class="font-semibold">self-exclusion tools</strong> if you need to take a break from gaming.' },
              { number: '4.3', text: 'Access <strong class="font-semibold">responsible gaming resources</strong> and support information.' },
              { number: '4.4', text: 'Contact our <strong class="font-semibold">support team</strong> if you have concerns about your gaming habits.' }
            ]
          }
      ]
    },
    {
        sectionTitle: "Service Policies",
        accordions: [
          {
            title: "Chargeback",
            mainText: "Our chargeback policy ensures fair and transparent handling of payment disputes and refund requests.",
            rulesList: [
              { number: '7.1', text: 'Chargeback requests must be <strong class="font-semibold">submitted within 30 days</strong> of the disputed transaction.' },
              { number: '7.2', text: 'All chargeback claims require <strong class="font-semibold">documentation and evidence</strong> to support the dispute.' },
              { number: '7.3', text: 'We reserve the right to <strong class="font-semibold">investigate all chargeback claims</strong> thoroughly before processing.' },
              { number: '7.4', text: 'Fraudulent chargeback attempts may result in <strong class="font-semibold">account suspension or legal action</strong>.' }
            ]
          },
          {
            title: "Close An Account",
            mainText: "Account closure procedures are designed to protect both users and the platform while ensuring compliance with regulations.",
            rulesList: [
              { number: '8.1', text: 'Account closure requests must be <strong class="font-semibold">submitted in writing</strong> through our support system.' },
              { number: '8.2', text: 'All <strong class="font-semibold">pending transactions must be completed</strong> before account closure can proceed.' },
              { number: '8.3', text: 'Account closure is <strong class="font-semibold">irreversible</strong> and all data will be permanently deleted.' },
              { number: '8.4', text: 'We may retain certain information for <strong class="font-semibold">regulatory compliance</strong> purposes.' }
            ]
          },
          {
            title: "Deposit Rules",
            mainText: "Our deposit rules ensure secure and compliant financial transactions while providing a smooth user experience.",
            rulesList: [
              { number: '9.1', text: 'Minimum deposit amount is <strong class="font-semibold">€20</strong> for all payment methods.' },
              { number: '9.2', text: 'Maximum daily deposit limit is <strong class="font-semibold">€10,000</strong> per account.' },
              { number: '9.3', text: 'All deposits must be made from <strong class="font-semibold">verified payment methods</strong> in the account holder\'s name.' },
              { number: '9.4', text: 'Deposits are typically <strong class="font-semibold">processed instantly</strong>, but may take up to 24 hours in some cases.' }
            ]
          },
          {
            title: "Withdrawal Policy",
            mainText: "Our withdrawal policy ensures timely and secure processing of your winnings while maintaining regulatory compliance.",
            rulesList: [
              { number: '10.1', text: 'Minimum withdrawal amount is <strong class="font-semibold">€50</strong> for all payment methods.' },
              { number: '10.2', text: 'Maximum withdrawal limit is <strong class="font-semibold">€50,000</strong> per month per account.' },
              { number: '10.3', text: 'Withdrawals are processed within <strong class="font-semibold">24-48 hours</strong> of approval.' },
              { number: '10.4', text: 'All withdrawals require <strong class="font-semibold">identity verification</strong> and may be subject to additional checks.' }
            ]
          },
          {
            title: "Refund Policy",
            mainText: "Our refund policy provides clear guidelines for handling refund requests and ensuring customer satisfaction.",
            rulesList: [
              { number: '11.1', text: 'Refund requests must be <strong class="font-semibold">submitted within 7 days</strong> of the transaction.' },
              { number: '11.2', text: 'Refunds are only available for <strong class="font-semibold">technical errors or system failures</strong> on our part.' },
              { number: '11.3', text: 'Refunds will be processed to the <strong class="font-semibold">original payment method</strong> used for the transaction.' },
              { number: '11.4', text: 'Processing time for refunds is typically <strong class="font-semibold">3-5 business days</strong>.' }
            ]
          }
        ]
      },
      {
        sectionTitle: "Deposit & Withdrawals",
        accordions: [
          {
            title: "Anti-Money Laundering Policy",
            mainText: "Our anti-money laundering policy ensures compliance with international regulations and prevents financial crimes.",
            rulesList: [
              { number: '12.1', text: 'We are required to <strong class="font-semibold">report suspicious transactions</strong> to relevant authorities.' },
              { number: '12.2', text: 'All transactions above <strong class="font-semibold">€10,000</strong> require additional verification.' },
              { number: '12.3', text: 'We may request <strong class="font-semibold">source of funds documentation</strong> for large deposits.' },
              { number: '12.4', text: 'Failure to provide required documentation may result in <strong class="font-semibold">account suspension</strong>.' }
            ]
          },
          {
            title: "Disclaimer Of Liabilities",
            mainText: "This disclaimer outlines the limitations of our liability and your responsibilities as a user of our platform.",
            rulesList: [
              { number: '13.1', text: 'We are not liable for <strong class="font-semibold">losses due to technical failures</strong> beyond our control.' },
              { number: '13.2', text: 'Users are responsible for <strong class="font-semibold">maintaining account security</strong> and protecting their credentials.' },
              { number: '13.3', text: 'We disclaim liability for <strong class="font-semibold">third-party service interruptions</strong> or payment processor issues.' },
              { number: '13.4', text: 'Our liability is limited to the <strong class="font-semibold">amount of fees paid</strong> in the 12 months preceding any claim.' }
            ]
          },
          {
            title: "Collusion, Cheating, Fraud And Criminal Activity",
            mainText: "We maintain a zero-tolerance policy for any form of cheating, fraud, or criminal activity on our platform.",
            rulesList: [
              { number: '14.1', text: 'Any form of <strong class="font-semibold">collusion or cheating</strong> will result in immediate account termination.' },
              { number: '14.2', text: 'We actively monitor for <strong class="font-semibold">suspicious betting patterns</strong> and unusual account activity.' },
              { number: '14.3', text: 'Fraudulent activities may be <strong class="font-semibold">reported to law enforcement</strong> authorities.' },
              { number: '14.4', text: 'We reserve the right to <strong class="font-semibold">withhold funds</strong> from accounts involved in criminal activity.' }
            ]
          },
          {
            title: "Closure of the account termination of the terms of use closure and termination by you",
            mainText: "This section outlines the procedures and consequences of account termination, whether initiated by you or by us.",
            rulesList: [
              { number: '15.1', text: 'You may terminate your account at any time by <strong class="font-semibold">contacting our support team</strong>.' },
              { number: '15.2', text: 'We may terminate accounts for <strong class="font-semibold">violation of terms of service</strong> or suspicious activity.' },
              { number: '15.3', text: 'Upon termination, all <strong class="font-semibold">pending transactions must be completed</strong> before account closure.' },
              { number: '15.4', text: 'Terminated accounts may not be <strong class="font-semibold">reactivated</strong> under any circumstances.' }
            ]
          }
        ]
      }
  ];