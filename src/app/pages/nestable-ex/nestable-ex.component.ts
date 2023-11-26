import { Component } from '@angular/core';
//import { NestableSettings } from 'ngx-nestable/lib/nestable.models';

@Component({
  selector: 'app-nestable-ex',
  templateUrl: './nestable-ex.component.html',
  styleUrls: ['./nestable-ex.component.css']
})
export class NestableExComponent {
  sideBarOpne = true;
  search:any;
  sideBarToggler(){
    this.sideBarOpne = !this.sideBarOpne;
  }

  // public options = {
  //   fixedDepth: true
  // } as NestableSettings;
  // public list = [
  //   { 'id': 1 },
  //   {
  //     'expanded': true,
  //     'id': 2, 'children': [
  //       { 'id': 3 },
  //       { 'id': 4 },
  //       {
  //         'expanded': false,
  //         'id': 5, 'children': [
  //           { 'id': 6 },
  //           { 'id': 7 },
  //           { 'id': 8 }
  //         ]
  //       },
  //       { 'id': 9 },
  //       { 'id': 10 }
  //     ]
  //   },
  //   { 'id': 11 }
  // ];

  
}
