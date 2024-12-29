import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LogoComponent,NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sms';

  executeForestFunction(){
    var forest1 = new Forest();
    forest1.createForest();
  }
}




class Animal {

  // properties (class member))
  name: string = '';
  age: number = 0;

  // methods  (class member)
   eat(){
    console.log("Animal Eating");
   
  }

  constructor(name:string, age: number){
    this.name = name;
    this.age = age;
    console.log("Animal constructor");
  }
  

}


// "Is a" relationship
class Lion extends Animal {
  tail: boolean = false;
  nail:string = '';
  

  // methods
  hunt(){
    console.log("Lion is hunting");
  }

  constructor(lionName:string, lionAge: number, lionNail:string, lionTail:boolean){
    super(lionName, lionAge)
    this.name = lionName+" Jungle";
    this.nail= lionNail;
   // this.tail = lionTail;
    console.log(" Lion constructor");
  }
}

class EuropianLion extends Lion {
  color:string='';

  heavySleep(){
    console.log(' europian lion sleeping');
  }

  constructor(lionName:string, lionAge: number, lionNail:string, lionTail:boolean,EuropianColor:string){
    super(lionName, lionAge, lionNail, lionTail)
    this.color= EuropianColor;
    console.log(' europian lion constructor');
  }
}


 class  Forest {
    createForest(){
     // var lion = new Lion('King',20,'sharp nail',true);
      // lion.hunt();
      // lion.eat();
      // console.log(lion);
      var eurpiosnLion = new EuropianLion('King',20,'sharp nail',true,'Red');
    }
 
}

