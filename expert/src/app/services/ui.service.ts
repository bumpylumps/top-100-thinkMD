import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAlbumPopup: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAlbumPopup():void {
    this.showAlbumPopup = !this.showAlbumPopup;
    this.subject.next(this.showAlbumPopup);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
