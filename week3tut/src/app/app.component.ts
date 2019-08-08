import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Set the initial variables
  text = "Sleep";
  buttonText = "Done";

  //Change the text and button text depending on current button text
  update(): void{
    switch(this.buttonText){
      case "Done":{
        this.buttonText = "Party";
        this.text = "Study";
        break;
      }
      case "Party":{
        this.buttonText = "Sleep";
        this.text = "Party";
        break;
      }
      case "Sleep":{
        this.buttonText = "Done";
        this.text = "Sleep";
        break;
      }
    }
  }

}
