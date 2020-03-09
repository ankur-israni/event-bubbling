import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-bubbling';

  onButtonClick($event){
    console.log("Buutton clicked", $event);
  }
  onDivClick($event){
    console.log("Div clicked",$event);
  }
}
