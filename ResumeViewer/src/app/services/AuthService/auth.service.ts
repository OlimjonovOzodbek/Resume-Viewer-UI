import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { loginModel } from '../../interfaces/login-model';
import { map, Observable } from 'rxjs';
import { responseModel } from '../../interfaces/response-model';
import { registerModel } from '../../interfaces/register-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.userApiUrl;
  tokenKey: string = 'token';
  token: any | null;
  router = inject(Router);

  login(data: loginModel): Observable<responseModel> {
    return this.http.post<responseModel>(`${this.apiUrl}Auth/Login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          localStorage.setItem(this.tokenKey, response.message)
          // this.router.navigate(['/home'])
        }
        return response
      })
    );
  }

  register(data: registerModel): Observable<responseModel> {
    return this.http.post<responseModel>(`${this.apiUrl}Auth/Register`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          console.log("Succesfully registered")
          // this.router.navigate(['/home'])
        }
        return response
      })
    );
  }
}
