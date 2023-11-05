import { Component, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Ui_jQuery';

  @HostListener('window:resize', ['$event'])

  onResize(event:any) {
    if(event.target.innerWidth < 900){
      console.log(event.target.innerWidth);
    }
  }


}
