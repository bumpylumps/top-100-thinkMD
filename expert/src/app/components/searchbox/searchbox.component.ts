import { Component } from '@angular/core';
import { Subscription } from 'rxjs';



import { AlbumsService } from '../../services/albums.service';
import { UiService } from 'src/app/services/ui.service';

import { AlbumPopupComponent } from '../album-popup/album-popup.component';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.sass']
})

export class SearchboxComponent {
  text: string = ''
  found!: any
  subscription!: Subscription;
  albumInfo!: [];
  popUp!: AlbumPopupComponent;

  constructor(private albumsService: AlbumsService, private uiService: UiService) { }

  ngOninit():void{
   
  }



  search():any{
    this.albumsService.getAlbums().subscribe((albums) => {
      //generate new array with relevant album info
      this.albumInfo = albums.feed.entry.map((album:any, i:any) => ({
  
        //isolate data for search use
        name: album["im:name"].label,
        artist: album["im:artist"].label,
        img: album["im:image"][2].label,
        storeLink: album["id"].label
        }))
      
        // gather input data from searchbox
      this.found = this.albumInfo.find(album => album["name"] === this.text);
        // if it exists, bring up the popup, console log matching object
      if(this.found){
        this.uiService.toggleAlbumPopup();
        console.log(this.found);
        //could not pass data to popup
        this.popUp.name = this.found.name;
      } else {
        //if not log not found
        console.log("Not found")
      }
        
      });
    
  }
}
