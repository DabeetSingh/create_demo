import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { Questions } from './questions/questions';
import { Contact } from './contact/contact';
import { ServicesDetails } from './services-details/services-details';

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
    },
    {
        path: 'service-details', component: ServicesDetails
    },
];
