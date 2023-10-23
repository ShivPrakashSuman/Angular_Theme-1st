import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-j-query',
  templateUrl: './j-query.component.html',
  styleUrls: ['./j-query.component.css']
})
export class JQueryComponent {

  sideBarOpne = true;

  sideBarToggler(){
    this.sideBarOpne = !this.sideBarOpne;
  }
  
  id1:any;
  id2:any;
  id3:any;
  id4:any;
  id5:any;
  id6:any;
  id7:any;
  id8:any;
  id9:any;
  
    drop(event: any) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
    hideme1() {
      this.id1 = true;
    }
    hideme2() {
      this.id2 = true;
    }
    hideme3() {
      this.id3 = true;
    }
    hideme4() {
      this.id4 = true;
    }
    hideme5() {
      this.id5 = true;
    }
    hideme6() {
      this.id6 = true;
    }
    hideme7() {
      this.id7 = true;
    }
    hideme8() {
      this.id8 = true;
    }
    hideme9() {
      this.id9 = true;
    }
}
