import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import LoginComponent from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { CallbackComponent } from './pages/authentication/callback/callback.component';
import { InitComponent } from './pages/authentication/init/init.component';


export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'register',
        component:RegisterComponent,
    },
    { path: 'home', component: AppComponent , canActivate:[AuthGuard]},
    { path: 'init', component: InitComponent },
    { path: '**', redirectTo: 'callback' },
    { path: 'callback', component: CallbackComponent },
];
