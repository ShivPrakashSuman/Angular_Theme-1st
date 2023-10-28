import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-pexels',
  templateUrl: './pexels.component.html',
  styleUrls: ['./pexels.component.css']
})
export class PexelsComponent {
  sideBarOpne = true;
  headers:any;
  contentLoaded:boolean = false;
  
  search:any='';
  data: Comment[] | any[] = [];
  demoCountArr: Comment[] | any[] = [0,1,2,3,4,5,6,7];
  page:any= 1;
  per_page:any=12;
  distance = 2;
  throttle = 50;

  constructor(private fb:FormBuilder, private apiService: ApiService, private alertService: AlertService){ }
  ngOnInit(): void {
    setTimeout(()=>{
      this.getData(this.page);
    }, 1000);

    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
  getData(page:any){
    if(this.search){
        this.data.splice(0);
        console.log("page", page, this.search);
    }
    let url = `/pexels?page=${page}&per_page=${this.per_page}&search=${this.search}`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.apiService.get(url, this.headers).subscribe((data:any)=>{
      if(data.status){ 
        let result = JSON.parse(data.data);
        for(let i = 0; i < (result.photos).length; ++i){
          this.data.push(result.photos[i].src.tiny);
        }
        this.page = result.page;
        this.per_page = result.per_page;
      } else {
        this.alertService.showWarning(data.message);
      }
    });
  }
  sideBarToggler(){
    this.sideBarOpne = !this.sideBarOpne;
  }

  onScroll(): void {
    this.getData(++this.page);
    console.log("scrolled down!!");
  }
  
  selector: string = ".main-panel";
}
