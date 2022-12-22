//Import dependencies
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';



//Component settings
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})

//use OnInit to animate on load
export class AlbumsComponent implements OnInit {


//import AlbumsService info
  constructor(private albumsService: AlbumsService) { }
  //declare array to use in getAlbums()
  albumInfo!: [];




//When page loads
  ngOnInit(): void {
   
  /*grab info from Albums Service, grab relevant data from 
  apiUrl response and clean up into array of objects
  */
  this.albumsService.getAlbums().subscribe((albums) => {
    //generate new array with relevant album info
    this.albumInfo = albums.feed.entry.map((album:any, i:any) => ({

      //use variables to store relevant info to pass to album-item components 
      name: album["im:name"].label,
      artist: album["im:artist"].label,
      img: album["im:image"][2].label
      }))
    
    });
  }
  
}

