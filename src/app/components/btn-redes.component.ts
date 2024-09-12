import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-redes',
  standalone: true,
  imports: [],
  templateUrl: './btn-redes.component.html',
  styleUrl: './btn-redes.component.css'
})
export class BtnRedesComponent {
  @Input() texto:string = '';
  @Input() red:string = '';
}
