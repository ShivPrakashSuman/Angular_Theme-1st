import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private apiService: ApiService, private alertService:AlertService){
    this.loginForm = fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(){
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(){
    if(this.loginForm.valid){
      let url = '/login';
      let body = this.loginForm.value;
      let headers = new Headers(); 
      headers.append('Accept', 'application/json');
      let options = { headers: headers};
      this.apiService.post(url, body, options).subscribe((data:any)=>{
        console.log('value', data);
        if(data.status){
          this.alertService.showSuccess(data.message);
        } else {
          this.alertService.showError(data.message);
        }
      });
    }
  }
}
