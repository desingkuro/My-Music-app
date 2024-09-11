import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import LoginComponent from './pages/authentication/login/login.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
    },
    { path: 'home', component: AppComponent },
    { path: '**', redirectTo: 'home' }
];
