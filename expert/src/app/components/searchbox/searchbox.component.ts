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
  
        //use variables to store relevant info to pass to album-item and album-popup components 
        name: album["im:name"].label,
        artist: album["im:artist"].label,
        img: album["im:image"][2].label,
        storeLink: album["id"].label
        }))
        
      this.found = this.albumInfo.find(album => album["name"] === this.text);

      if(this.found){
        this.uiService.toggleAlbumPopup();
        console.log(this.found);
        this.popUp.name = this.found.name;
      } else {
        console.log("Not found")
      }
        
      });
    
  }
}
