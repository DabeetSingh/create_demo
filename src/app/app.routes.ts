import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { Questions } from './questions/questions';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { ServicesDetails } from './services-details/services-details';
import { Projects } from './projects/projects';
import { Process } from './process/process';
import { Testimonials } from './testimonials/testimonials';

export const routes: Routes = [
    { path: '', component: HomePage, title: 'Shukrana Concrete | Calgary Concrete Construction' },
    { path: 'about', component: About, title: 'About Us | Shukrana Concrete' },
    { path: 'services', component: Services, title: 'Concrete Services | Shukrana Concrete' },
    { path: 'projects', component: Projects, title: 'Our Projects | Shukrana Concrete' },
    { path: 'process', component: Process, title: 'Our Process | Shukrana Concrete' },
    { path: 'testimonials', component: Testimonials, title: 'Testimonials | Shukrana Concrete' },
    { path: 'FAQs', component: Questions, title: 'FAQs | Shukrana Concrete' },
    { path: 'contact', component: Contact, title: 'Contact & Free Quote | Shukrana Concrete' },
    { path: 'service-details', component: ServicesDetails, title: 'Service Gallery | Shukrana Concrete' },
    { path: '**', redirectTo: '' },
];
