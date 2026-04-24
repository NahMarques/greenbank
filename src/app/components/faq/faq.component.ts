
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'faq-component',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faqItems = [
    { question: 'What credit score do I need to apply for a credit card?', 
      answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.', 
      expanded: true },
    { question: 'How can I apply for a credit card online?', 
      answer: 'Applying for a credit card online is simple. Just visit our website, select the desired credit card, and click on the "Apply Now" button. Follow the instructions, provide your information, and submit your application securely.', 
      expanded: false },
    { question: 'Are there any annual fees associated with the credit card?', 
      answer: 'Annual fees may apply to some credit cards, but not all. Our credit card details page will specify if there are any annual fees associated with the card you\'re interested in.', 
      expanded: false },
    { question: 'How long does it take to receive the credit card once approved?', 
      answer: 'Once your credit card application is approved, it typically takes 7 to 10 business days to receive your physical card by mail. You can start using your virtual card immediately after approval for online purchases.', 
      expanded: false },
    { question: 'How can I check my credit card balance and transactions?', 
      answer: 'You can easily check your credit card balance and transactions through our secure online banking portal or mobile app. Simply log in to your account to access your credit card information.', 
      expanded: false },
    { question: 'What should I do if my credit card is lost or stolen?', 
      answer: 'If your credit card is lost or stolen, please notify us immediately through our customer support line or online banking. We will assist you in securing your account and issuing a replacement card.', 
      expanded: false },
    { question: 'Is my credit card information secure?', 
      answer: 'Yes, we prioritize the security of your information. Our credit card systems use encryption and industry-standard security measures to protect your data, ensuring a safe and seamless experience.', 
      expanded: false }
  ];
}