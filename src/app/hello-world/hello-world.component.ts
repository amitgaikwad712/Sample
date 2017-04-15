/**
 * Created by Aditi Khandare on 08/04/2017.
 */
import { Component } from '@angular/core';
@Component({
  selector:'hw-sel',
  templateUrl:'hello-world.component.html',
  styleUrls:['hello-world.component.css'],
})
export class HelloWorldComponent {
  constructor() {
    console.log('ABC');
  }
}
