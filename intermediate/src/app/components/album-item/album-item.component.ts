import { Component, Input, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';


@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})
export class AlbumItemComponent implements OnInit{
 
  constructor(private albumsService: AlbumsService) {}
  @Input() albums!: []
  @Input() name!: string
  @Input() artist!: string
  @Input() img!: string  
  

   
  
  ngOnInit(): void {
  }

}
