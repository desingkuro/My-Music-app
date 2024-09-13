import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient} from '@angular/common/http';
import { SpotifyService } from './service/spotify/spotify.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers:[
    SpotifyService
  ]
})
export class AppModule { }
