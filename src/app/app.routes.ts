import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'login',
        loadChildren: ()=> import('./pages/authentication/login/login.component'),
    },
    { path: 'home', component: AppComponent },
    { path: '**', redirectTo: 'home' }
];
