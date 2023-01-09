import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';



import { AlbumsService } from 'src/app/services/albums.service';
import { UiService } from 'src/app/services/ui.service';

import { SearchboxComponent } from '../searchbox/searchbox.component';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.sass']
})


export class AlbumPopupComponent {
//declare variables for imported data
  @Input() name!: string
  @Input() artist!: string
  @Input() img!: string 
  @Input() storeLink!: string

//save view state for album popup to use in constructor
  showAlbumPopup!: boolean;
  subscription!: Subscription;
  //bring in searchbox component to gather data from user for searches
  searchBox!: SearchboxComponent;


  constructor(private albumsService: AlbumsService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      //listen for albumPopup boolean value
      .subscribe((value)=> (this.showAlbumPopup = value))
  }

 
 
//import service for popup
  togglePopup(){
    this.uiService.toggleAlbumPopup();
  }



}
