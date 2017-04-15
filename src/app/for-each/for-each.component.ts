import {Component} from "@angular/core";
/**
 * Created by Aditi Khandare on 15/04/2017.
 */

@Component({
  selector:'for-each-sel',
  templateUrl:'for-each.component.html',
  styleUrls :['for-each.component.css']
})
 export class ForEachComponent{

  nums: number[] =[10,20,30,40];
  words:string[]=["ABC","XYZ","PQR"];

}

