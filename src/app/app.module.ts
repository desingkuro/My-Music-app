import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient} from '@angular/common/http';
import { SpotifyService } from './service/spotify/spotify.component';
import { FormsModule } from '@angular/forms';
import LoginComponent from './pages/authentication/login/login.component';



@NgModule({
  declarations: [
  ],
  imports: [
    LoginComponent,
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers:[
    SpotifyService
  ]
})
export class AppModule { }
