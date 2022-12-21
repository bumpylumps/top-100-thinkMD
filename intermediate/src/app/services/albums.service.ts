import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'


  constructor(private http: HttpClient ) { }

  getAlbums() {
    return this.http.get<any>(this.apiUrl);
  }
}
