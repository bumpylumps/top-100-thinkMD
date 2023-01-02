//Import Dependencies
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlbumsService } from '../../services/albums.service';
import { UiService } from 'src/app/services/ui.service';

import { AlbumPopupComponent } from '../album-popup/album-popup.component';


//Component settings
@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})

//Use OnInit to grab album info on page load
export class AlbumItemComponent{
 

 
 
  /*
  Declare variables to be imported from albums container component
  for album info display
  */
  @Input() name!: string
  @Input() artist!: string
  @Input() img!: string  

  showAlbumPopup!: boolean;
  subscription!: Subscription;

  //Import Albums Service for access to album info from apiUrl
  constructor(private albumsService: AlbumsService, private uiService: UiService) {
   this.subscription = this.uiService
     .onToggle()
     .subscribe((value)=> (this.showAlbumPopup = value))
}


}
