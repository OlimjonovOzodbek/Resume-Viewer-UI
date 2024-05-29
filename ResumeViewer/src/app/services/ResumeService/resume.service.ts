import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResumeModel } from '../../interfaces/resume-model';
import { Observable, catchError } from 'rxjs';
import { responseModel } from '../../interfaces/response-model';
import { UploadResumeCommand } from '../../interfaces/upload-resume-command';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.resumeApiUrl;
  tokenKey: string = 'token';

  getAllResumes(page: number, size: number): Observable<ResumeModel[]> {
    const headers = new HttpHeaders(({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    }));

    return this.http.get<ResumeModel[]>(`${this.apiUrl}Resume/GetAllResume?PageIndex=${page}&Size=${size}`, { headers })
      .pipe(
        catchError((err: any) => {
          console.error(err)
          throw err;
        })
      );
  }

  getAllResumesByUserId(Id: string, page: number, size: number): Observable<ResumeModel[]> {
    const headers = new HttpHeaders(({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    }));

    return this.http.get<ResumeModel[]>(`${this.apiUrl}Resume/GetAllResumeByUserId?UserId=${Id}&Token=${localStorage.getItem(this.tokenKey)}&PageIndex=${page}&Size=${size}`, { headers })
      .pipe(
        catchError((err: any) => {
          console.error(err)
          throw err;
        })
      );
  }

  uploadResume(file: FormData) {

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const decodedToken = jwtDecode<any>(token);
    const userId = decodedToken.jti;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const options = { headers: headers };

    return this.http.post<any>(`${this.apiUrl}Resume/UploadResume?UserId=${userId}&Token=${token}`, file, options);
  }
  


  getById(id: string): Observable<Blob> {
    const headers = new HttpHeaders(({
      'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
    }))

    return this.http.get(`${this.apiUrl}Resume/GetById?id=${id}`, { responseType: 'blob', headers })
      .pipe(
        catchError((err: any) => {
          console.error(err);
          throw err;
        })
      )
  }

  // getByUserId(id: string, userId: string, token: string): Observable<Blob> {
  //   const headers = new HttpHeaders(({
  //     'Authorization': `Bearer ${localStorage.getItem(this.tokenKey)}`
  //   }))

  //   return this.http.get(`${this.apiUrl}User/GetByUserId?userId=${userId}&resumeId=${id}&Token=${token}`, { responseType: 'blob', headers })
  //     .pipe(
  //       catchError((err: any) => {
  //         console.error(err);
  //         throw err;
  //       })
  //     )
  // }

  deleteResume(id: string, userId: string): Observable<responseModel> {
    debugger;
    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders(({
      'Authorization': `Bearer ${token}`
    }))

    const options = { headers: headers };

    return this.http.delete<responseModel>(`${this.apiUrl}Resume/Delete?userId=${userId}&resumeId=${id}&token=${token}`, options);
  }
}
