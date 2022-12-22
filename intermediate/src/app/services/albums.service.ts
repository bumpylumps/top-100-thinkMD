//import dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



//injectable settings
@Injectable({
  providedIn: 'root'
})

//declare service class to grab album info
export class AlbumsService {
  //store url for api in variable
  private apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'

  //pass httpClient module to service via its constructor
  constructor(private http: HttpClient ) { }

  //declare function to get album info from apiUrl
  getAlbums() {
    /*
    since it's an rss url and not a database connection and we don't have a model,
    accept any response type from our rss url
    */ 
    return this.http.get<any>(this.apiUrl);
  }
}
