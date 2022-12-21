import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';

import { Album } from '../../Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {



  constructor(private albumsService: AlbumsService) { }
  albums!: Album;
  albumInfo!: [];





  ngOnInit(): void {
   
  this.albumsService.getAlbums().subscribe((albums) => {
    this.albums = albums.feed.entry;
    this.albumInfo = albums.feed.entry.map((album:any, i:any) => ({
      name: album["im:name"].label,
      artist: album["im:artist"].label,
      img: album["im:image"][2].label
      }))

    console.log(this.albumInfo)
    
    });
  }
  
}

