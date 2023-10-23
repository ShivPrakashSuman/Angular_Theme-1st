import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private apiService: ApiService, private alertService:AlertService){
    this.registerForm = fb.group({
      name:['', Validators.required],
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
    if(this.registerForm.valid){
      let url = '/register';
      let body = this.registerForm.value;
      let headers = new Headers(); 
      headers.append('Accept', 'application/json');
      let options = { headers: headers};
      this.apiService.post(url, body, options).subscribe((data:any)=>{
        if(data.status){
          this.alertService.showSuccess(data.message);
        } else {
          this.alertService.showError(data.message);
        }
      });
    }
  }
}
