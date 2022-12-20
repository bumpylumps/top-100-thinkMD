import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../Album'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  albums!: Album;


  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    console.log(this.albumsService.getAlbums())
    this.albumsService.getAlbums().subscribe((albums) => (this.albums = albums))
  }

}
