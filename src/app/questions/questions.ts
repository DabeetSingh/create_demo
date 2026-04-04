import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})
export class Questions {
  faqs = [
    {
      question: 'What is prompt payment legislation?',
      answer: `Prompt payment legislation establishes mandatory time periods for issuing, disputing, and paying invoices in the construction industry.
It creates a specialized scheme to adjudicate disputes over non-payment and payment amounts.
The objectives include alleviating payment delays and project delays.`,
      open: true
    },
    {
      question: 'What are the key features of brampton prompt payment legislation?',
      answer: 'The Brampton Construction Prompt Payment and Adjudication Act generally mirrors Ontario’s prompt payment legislation. It applies to almost every public and private construction contract, except if exempted by regulation. The Act aims to streamline payment processes and minimize delays throughout the construction pyramid1.',
      open: false
    },
    {
      question: 'What type of training and certifications do construction companies need?',
      answer: 'Construction companies should have trained and certified staff in relevant areas such as safety, project management, and specialized skills.Certifications may include OSHA safety training, LEED accreditation, and trade-specific certifications.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs.forEach((item, i) => {
      item.open = i === index ? !item.open : false;
    });
  }
}
