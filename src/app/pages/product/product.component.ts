import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  sideBarOpne = true;
  search:any;
  sideBarToggler(){
    this.sideBarOpne = !this.sideBarOpne;
  }

  toppings = this._formBuilder.group({
    less_20: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) {
  }

}
