import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  executionMethod(){
  var Manufacturer1 = new Manufacturer()
  Manufacturer1.ManufactureCar()  
}

  
}

class Car {
Name:string = '';
Wheel:string = ''

move(){
console.log('car is moving.')
}

constructor(carname:string,carwheel:string){
  console.log('Car Class Start.')
  this.Name = carname
  this.Wheel = carwheel
}

}

class bmw extends Car{
  awd:boolean = false;
  color:string = ''

  constructor(bmwcarname:string,bmwwheel:string,bmwcolor:string,bmwawd:boolean){
    console.log('bmw Class Start.')
    super(bmwcarname,bmwwheel)
    this.awd = bmwawd
    this.color = bmwcolor

  }



}

class Manufacturer{

  ManufactureCar(){
    console.log('Manufacturer Class Start.')
    var bmw1 = new bmw('x1','32','white',true)
  }
}

