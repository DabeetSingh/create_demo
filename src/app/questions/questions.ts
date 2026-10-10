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
      question: 'Do you provide free quotes?',
      answer: 'Yes. We provide free, no-obligation quotes for all projects. Share a few details about your project and we will follow up with a clear estimate.',
      open: true
    },
    {
      question: 'How long does a project take?',
      answer: 'Timelines depend on the scope of work. Small projects such as a sidewalk or patio are often completed in a few days, while larger driveways and foundations take one to two weeks. We always confirm a schedule up front.',
      open: false
    },
    {
      question: 'What areas do you service?',
      answer: 'We proudly serve Calgary, Airdrie, Chestermere, Cochrane and the surrounding communities.',
      open: false
    },
    {
      question: 'Do you offer warranties?',
      answer: 'Yes. We stand behind our workmanship and materials. Details of the warranty are explained clearly before any work begins.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs.forEach((item, i) => {
      item.open = i === index ? !item.open : false;
    });
  }
}
