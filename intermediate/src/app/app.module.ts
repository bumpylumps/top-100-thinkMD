import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    AlbumItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
