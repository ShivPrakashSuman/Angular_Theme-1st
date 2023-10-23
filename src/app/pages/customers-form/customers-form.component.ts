import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent {
  sideBarOpne = true;
  hide = true;

  registerForm: FormGroup;
  submitted: boolean = false;
  public showPassword: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService, private alertService: AlertService,) {
    this.registerForm = fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      house_no: ['', Validators.required],
      floor_no: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      let url = '/customer-add';
      let data = this.registerForm.value;
      let body = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        mobile: data.mobile.toString(),
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        country: data.country,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        house_no: data.house_no,
        floor_no: data.floor_no,
        address: data.address
      };
      let headers = new Headers();
      // headers.append('Content-Type', 'multipart/form-data');  ye only form main file upload hota tb lgta headers
      headers.append('Accept', 'application/json');
      let options = { headers: headers };
      this.apiService.post(url, body, options).subscribe((data: any) => {
        console.log('saata', data);
        if (data.status) {
          this.alertService.showSuccess(data.message);
        } else {
          this.alertService.showError(data.message);
        }
      });
    } else {
      this.alertService.showWarning('This is input Empty');
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  sideBarToggler(){
    this.sideBarOpne = !this.sideBarOpne;
  }
  reset(){
    this.registerForm.reset();
  }
}
