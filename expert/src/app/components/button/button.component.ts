//import dependencies
import { Component } from '@angular/core';

//component settings
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})


export class ButtonComponent {

  //simple link function to redirect to project's repo on github
  goToLink(url: string){
    window.open(url, "_blank")
  }

}
