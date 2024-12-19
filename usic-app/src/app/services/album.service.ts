import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(protected http: HttpClient) { }

  getMostPopularAlbums(): Observable<any> { //for sign up page, will pull from spotify API, not Db
    return this.http.get<any>('/api/spotify/most-popular-albums'); 
  }

  testBackendConnection(): Observable<any> {
    return this.http.get('/api/spotify/test-backend-connection');
  }
  
  
}
