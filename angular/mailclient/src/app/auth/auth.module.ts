import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/common.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent, NewAccountComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class AuthModule {}
