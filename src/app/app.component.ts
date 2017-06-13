import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: (object)[] = [{Email:"A", Importance: true, Subject:"a", Contect:"a" },{Email:"b", Importance: true, Subject:"b", Contect:"b" },{Email:"c", Importance:false, Subject:"c", Contect:"c" },{Email:"d", Importance:false, Subject:"d", Contect:"d" }];

  importance: boolean =true;

}
