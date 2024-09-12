import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import LoginComponent from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'register',
        component:RegisterComponent,
    },
    { path: 'home', component: AppComponent },
    { path: '**', redirectTo: 'home' }
];
