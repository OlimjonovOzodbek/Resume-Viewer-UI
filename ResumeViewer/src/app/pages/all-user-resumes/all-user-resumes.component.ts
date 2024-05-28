import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/ResumeService/resume.service';
import { jwtDecode } from 'jwt-decode';
import { ResumeModel } from '../../interfaces/resume-model';

@Component({
  selector: 'app-all-user-resumes',
  templateUrl: './all-user-resumes.component.html',
  styleUrl: './all-user-resumes.component.css'
})
export class AllUserResumesComponent implements OnInit {
  constructor(private service: ResumeService) {}
  decodedToken: any | null;
  tokenKey: string = 'token';
  page: number = 1;
  resumes: ResumeModel[] = [];

  ngOnInit(): void {
    this.loadResumes()  
}

  loadResumes(): void {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this.decodedToken = jwtDecode(token);
      console.log('Decoded Token:', this.decodedToken);

      const userId = this.decodedToken.jti;
      console.log(userId);
      this.service.getAllResumesByUserId(userId, this.page, 10).subscribe({
        next: (response) => {
          this.resumes = response;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

  }
}
