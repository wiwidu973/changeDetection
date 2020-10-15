import { Component } from '@angular/core';
import { Person } from './child/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changedetection';



public person: Person ={
  name:"John",
  age:20,
}
public reassign(){
  this.person={
    name:this.person.name,
    age:this.person.age
  }
}

}

