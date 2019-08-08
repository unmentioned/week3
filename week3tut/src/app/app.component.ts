import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Set the initial variables
  title = "Sleep";
  buttonText = "Done";

  //Change the text and button text depending on current button text
  update(): void{
    switch(this.title){
      case "Sleep":{
        this.title = "Study";
        break;
      }
      case "Study":{
        this.title = "Party";
        break;
      }
      case "Party":{
        this.title = "Sleep";
        break;
      }
    }
  }

}
