import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductComponent } from './pages/product/product.component';
import { PexelsComponent } from './pages/pexels/pexels.component';
import { CustomersFormComponent } from './pages/customers-form/customers-form.component';
import { AccountComponent } from './pages/account/account.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component:  CustomersComponent},
  { path: 'customers/create', component:  CustomersFormComponent},
  { path: 'products', component: ProductComponent },
  { path: 'pexels', component: PexelsComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
