import { Routes } from '@angular/router';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { customerRoutes } from './features/customer/customer.routes';
import { authRoutes } from './features/auth/auth.routes';

export const routes: Routes = [
    // Feature Routes
    ...customerRoutes, // Spread Operator
    ...authRoutes,
    // Common Routes
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartPageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: '**',
        component: DefaultPageComponent
    }
];
