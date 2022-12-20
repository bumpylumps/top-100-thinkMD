import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../Album';


@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})
export class AlbumItemComponent implements OnInit{
  @Input() albums!: Album;

  constructor() {}

  ngOnInit(): void {
    
  }

}
