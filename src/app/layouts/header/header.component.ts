import { Component , EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleVal:boolean = false;
  searchBtn:boolean = false;
  searchForm: FormGroup; 
  drawer:any;
  @Output() toggleSidebarFormMe: EventEmitter<any> = new EventEmitter();

constructor(private fb: FormBuilder){
  this.searchForm = fb.group({
    search: ['', Validators.required],
  });
}
  searchToggle(){
    if(this.searchBtn){
      this.searchBtn = false;
    } else{ 
      this.searchBtn = true;
    }
  }

  ngDoCheck() {
    if(this.searchForm.valid){
      console.log('search - ', this.searchForm.value);
    }
  }
  
  toggleSidebar() {  //  sidebar manage --------
    this.toggleSidebarFormMe.emit();
  }

}
