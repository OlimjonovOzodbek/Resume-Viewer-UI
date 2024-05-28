import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map } from 'rxjs';
import { UserModel } from '../../interfaces/user-model';
import { responseModel } from '../../interfaces/response-model';
import { SetRoleModel } from '../../interfaces/set-role-model';
import { UpdateUserModel } from '../../interfaces/update-user-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.userApiUrl;
  tokenKey: string = 'token';

  getAllUsers(page: number, size: number): Observable<UserModel[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    });

    return this.http.get<UserModel[]>(`${this.apiUrl}User/GetAll?PageIndex=${page}&Size=${size}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching users:', error);
          throw error;
        })
      );
  }

  getById(data: string): Observable<UserModel> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    });

    return this.http.get<UserModel>(`${this.apiUrl}User/GetById?Id=${data}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error(error);
          throw error;
        })
      );
  }

  setRole(data: SetRoleModel): Observable<responseModel> {
    const headers = new HttpHeaders(({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    }))

    return this.http.patch<responseModel>(`${this.apiUrl}User/SetRole`, data, { headers })
      .pipe(
        map((response) => {
          if (response.isSuccess) {
            console.log('Role succesfully setted!');
          }
          return response;
        })
      );
  }

  update(data: UpdateUserModel): Observable<responseModel> {
    const headers = new HttpHeaders(({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    }))

    return this.http.put<responseModel>(`${this.apiUrl}User/Update`, data, { headers })
      .pipe(
        map((response) => {
          if (response.isSuccess) {
            console.log('Updated!');
          }
          return response;
        })
      )
  }

  delete(data: string): Observable<responseModel> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    });

    return this.http.delete<responseModel>(`${this.apiUrl}User/Delete/?id=${data}`, { headers })
      .pipe(
        map((response) => {
          if (response.isSuccess) {
            console.log('Deleted!');
          }
          return response;
        })
      );
  }
}
