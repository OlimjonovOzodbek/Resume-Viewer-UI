import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllResumesComponent } from './pages/all-resumes/all-resumes.component';
import { AllUserResumesComponent } from './pages/all-user-resumes/all-user-resumes.component';
import { UploadResumeComponent } from './pages/upload-resume/upload-resume.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterLink } from '@angular/router';
import { GetByIdComponent } from './pages/get-by-id/get-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllUsersComponent,
    AllResumesComponent,
    AllUserResumesComponent,
    UploadResumeComponent,
    NavbarComponent,
    HomeComponent,
    GetByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
