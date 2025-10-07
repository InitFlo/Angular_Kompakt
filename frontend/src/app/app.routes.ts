import { Routes } from '@angular/router';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartPageComponent
    },
    {
        path: '**',
        component: DefaultPageComponent
    }
];
