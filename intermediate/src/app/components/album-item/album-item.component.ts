//Import Dependencies
import { Component, Input } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';

//Component settings
@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})

//Use OnInit to grab album info on page load
export class AlbumItemComponent{
 
  //Import Albums Service for access to album info from apiUrl
  constructor(private albumsService: AlbumsService) {}
 
  /*
  Declare variables to be imported from albums container component
  for album info display
  */
  @Input() name!: string
  @Input() artist!: string
  @Input() img!: string  

}
