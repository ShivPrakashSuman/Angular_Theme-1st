import { Component } from '@angular/core';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  contentLoaded:boolean = false;
  sideBarOpne = true;
  data:any = [];
  constructor(private apiService: ApiService, private alertService: AlertService){ }
  ngOnInit(): void {
    setTimeout(()=>{
      this.getData();
    }, 1000);

    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
  getData(){
    let url = `/customer`;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.apiService.get(url, headers).subscribe((data:any)=>{
      if(data.status){ 
        console.log('data', data.data);
        this.data = data.data;

      } else {
        this.alertService.showWarning(data.message);
      }
    });
  }

  sideBarToggler(){
    this.sideBarOpne = !this.sideBarOpne;
  }
}
