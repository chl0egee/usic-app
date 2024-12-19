import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-sign-up-2',
  templateUrl: './sign-up-2.component.html',
  styleUrl: './sign-up-2.component.scss'
})
export class SignUp2Component {


  constructor (private albumService: AlbumService) {
    this.albumService.testBackendConnection().subscribe({
      next: (data: any) => console.log('API Response:', data),
      error: (err: any) => console.error('API Error:', err)
    });
  }
  
}
