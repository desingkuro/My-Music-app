import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  display_name: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: any[];
  type: string;
  uri: string;
  followers: { href: string | null, total: number };
  country: string;
  product: string;
  explicit_content: { filter_enabled: boolean, filter_locked: boolean };
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateService implements OnInit{
  private state = new BehaviorSubject<User | null>(null);
  currentState = this.state.asObservable();
  private idPlaylist = new BehaviorSubject<string | null>(null);

  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem('userInfo');
    if(data){
      const dataTransform = JSON.parse(data);
      this.updateState(dataTransform);
    }
  }

  getId(): string {
    return this.idPlaylist.getValue() || ''; // Devuelve el valor actual del BehaviorSubject o una cadena vacía si es null
  }

  updateState(newState: User) {
    this.state.next(newState);
  }

  updateIdPlaylist(newId: string) {
    this.idPlaylist.next(newId);
  }
}
