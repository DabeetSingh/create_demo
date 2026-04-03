import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Services } from './services/services';

export const routes: Routes = [
    {
        path: '', component: HomePage
    },
    {
        path: 'services', component: Services
    }
];
