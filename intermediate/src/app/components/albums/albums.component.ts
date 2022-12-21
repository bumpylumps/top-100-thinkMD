import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {



  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
   
    this.albumsService.getAlbums();
  }

}
