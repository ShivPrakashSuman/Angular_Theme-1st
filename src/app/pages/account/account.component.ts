
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { post } from 'jquery';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  hide = true;
  sideBarOpne = true;
  registerForm: FormGroup;
  id: any;
  constructor(private fb: FormBuilder, private apiService: ApiService, private alertService: AlertService, private route: ActivatedRoute) {
    this.registerForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (this.id != undefined) {
      console.log('Update id =', this.id)
    }
    this.getData();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getData() {
    let url: string = `/update?id=1`;
    this.apiService.get(url, {}).subscribe((data: any) => {
      console.log('ff', data)
      if (data.status) {
        let userData = data.data[0];
        this.registerForm = this.fb.group({
          name: [`${userData.name}`, Validators.required],
          email: [`${userData.email}`, Validators.required],
          password: [`${userData.password}`, Validators.required],
        });
      } else {
        this.alertService.showError('Data Fatch Failed..');  // data.message -----
      }
    });
  }

  submit() {
    if (this.registerForm.valid) {
      let url = '/register-update?id=1';
      let body = this.registerForm.value;
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let options = { headers: headers }
      this.apiService.post(url, body, options).subscribe((data: any) => {
        if (data.status) {
          this.alertService.showInfo(data.message);
        } else {
          this.alertService.showInfo(data.message);
        }
      });
    }
  }

  sideBarToggler() {
    this.sideBarOpne = !this.sideBarOpne;
  }
}
