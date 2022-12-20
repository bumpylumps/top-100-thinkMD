import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


import { Observable } from 'rxjs'
import { Album } from '../Album'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'

  constructor(private http: HttpClient ) { }

  getAlbums(): Observable<Album> {
    return this.http.get<Album>(this.apiUrl).pipe();
  }
}
