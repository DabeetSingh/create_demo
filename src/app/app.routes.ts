import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { Questions } from './questions/questions';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path: '', component: HomePage
    },
    {
        path: 'about', component: About
    },
    {
        path: "FAQs", component: Questions
    },
    {
        path: "contact", component: Contact
    }
];
