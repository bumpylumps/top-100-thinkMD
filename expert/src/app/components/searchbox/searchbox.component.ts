import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.sass']
})
export class SearchboxComponent {

  search():void {
    console.log('Searching')
  }
}
