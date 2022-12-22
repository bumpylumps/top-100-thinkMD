import { Component, Input } from '@angular/core';

import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.sass']
})


export class AlbumPopupComponent {
  constructor(private albumsService: AlbumsService) {}

  @Input() name!: string
  @Input() artist!: string
  @Input() img!: string 



}
