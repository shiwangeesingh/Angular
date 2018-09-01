import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './views/admin/forgot-password/forgot-password.component';
import { UserAccountComponent } from './views/user-account/user-account.component';
import { AddUserComponent } from './shared/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',   
    
  },    
 {
    path: 'forgot-password',
    component: ForgotPasswordComponent,   
    
  },    

      {
        path: 'dashboard',
        component: DashboardComponent
      },


      {
        path: 'user-account',
        component: UserAccountComponent
      },

      {
        path: 'add-user',
        component: AddUserComponent
      },


      {
        path: '**',
        component: LoginComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
