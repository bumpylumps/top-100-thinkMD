import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { AlbumPopupComponent } from './components/album-popup/album-popup.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    AlbumItemComponent,
    AlbumPopupComponent,
    SearchboxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
