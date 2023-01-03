//Import dependencies
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';




import { AlbumsService } from '../../services/albums.service';
import { UiService } from 'src/app/services/ui.service';




//Component settings
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})

//use OnInit to animate on load
export class AlbumsComponent implements OnInit {
  
  showAlbumPopup!: boolean;
  subscription!: Subscription;
  
  //declare array to use in getAlbums()
  albumInfo!: [];

//import AlbumsService info
constructor(private albumsService: AlbumsService, private uiService: UiService) {
  this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=> (this.showAlbumPopup = value))
}


//When page loads
  ngOnInit(): void {
   
  /*grab info from Albums Service, grab relevant data from 
  apiUrl response and clean up into array of objects
  */
  this.albumsService.getAlbums().subscribe((albums) => {
    //generate new array with relevant album info
    this.albumInfo = albums.feed.entry.map((album:any, i:any) => ({

      //use variables to store relevant info to pass to album-item and album-popup components 
      name: album["im:name"].label,
      artist: album["im:artist"].label,
      img: album["im:image"][2].label,
      storeLink: album["id"].label
      }))
    
    });
  }
  
  formatPopup(){
    this.uiService.toggleAlbumPopup();
 }




}

