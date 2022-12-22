//import dependencies
import { Component } from '@angular/core';

//component settings
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

//no behaviors necessary (behavior handled in button component)
export class FooterComponent{

  //simple link function to redirect to project's repo on github
  goToLink(url: string){
    window.open(url, "_blank")
  }

}
