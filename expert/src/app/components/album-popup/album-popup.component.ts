import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';



import { AlbumsService } from 'src/app/services/albums.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.sass']
})


export class AlbumPopupComponent {

  @Input() name!: string
  @Input() artist!: string
  @Input() img!: string 
  @Input() storeLink!: string


  showAlbumPopup!: boolean;
  subscription!: Subscription;


  constructor(private albumsService: AlbumsService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value)=> (this.showAlbumPopup = value))
  }

 
  togglePopup(){
    this.uiService.toggleAlbumPopup();
  }

}
