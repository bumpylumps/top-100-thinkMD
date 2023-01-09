import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //declare state variable for album popup
  private showAlbumPopup: boolean = false;
  //save variable for Subject object
  private subject = new Subject<any>();

  constructor() { }

  //set up popup open and close functions
  toggleAlbumPopup():void {
    this.showAlbumPopup = !this.showAlbumPopup; // <-- controls view of popup
    this.subject.next(this.showAlbumPopup); // <-- set view state of popup
  }

  //toggle view of popup
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
