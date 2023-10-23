import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  getUrl: any;
  panelOpenState = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.getUrl = this.router.url;
  }
  getActive(mane: any) {
    if (this.getUrl.includes(mane)) {
      return true;
    } else {
      return false;
    }
  }
}
