import { Component } from '@angular/core';

@Component({
  selector: 'app-album-widget',
  templateUrl: './album-widget.component.html',
  styleUrl: './album-widget.component.scss'
})
export class AlbumWidgetComponent {
  rating: number = 0; 
  // will prob use input output to send rating changes perhaps 
  
}
