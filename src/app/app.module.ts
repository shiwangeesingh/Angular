import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
// import{AuthGuard} from './guards/auth.guard'

import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ForgotPasswordComponent } from './views/admin/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './views/admin/change-password/change-password.component';
import { UserAccountComponent } from './views/user-account/user-account.component';
import { AddUserComponent } from './shared/add-user/add-user.component';

// import { LoadingModule,ANIMATION_TYPES } from 'ngx-loading';
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent,
    UserAccountComponent,
    AddUserComponent,

 
    // CustomerGroupComponent,
  
    // DriverDashboardComponent,
   
  ],
  imports: [
    ModalModule.forRoot(),
   
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
