import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllResumesComponent } from './pages/all-resumes/all-resumes.component';
import { AllUserResumesComponent } from './pages/all-user-resumes/all-user-resumes.component';
import { UploadResumeComponent } from './pages/upload-resume/upload-resume.component';
import { HomeComponent } from './components/home/home.component';
import { adminGuard, guestGuard, multiRoleGuard, superAdminGuard, userGuard } from './guard/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
  { path: 'all-users', component: AllUsersComponent, canActivate: [superAdminGuard] },
  { path: 'all-resumes', component: AllResumesComponent, canActivate: [multiRoleGuard]},
  { path: 'my-resumes', component: AllUserResumesComponent, canActivate: [userGuard] },
  { path: 'upload-resume', component: UploadResumeComponent, canActivate: [userGuard] },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
