import { Component, OnInit } from '@angular/core';
import { ResumeModel } from '../../interfaces/resume-model';
import { ResumeService } from '../../services/ResumeService/resume.service';

@Component({
  selector: 'app-all-resumes',
  templateUrl: './all-resumes.component.html',
  styleUrl: './all-resumes.component.css'
})
export class AllResumesComponent implements OnInit{
  resumes: ResumeModel[] = [];
  page: number = 1;

  constructor(private service: ResumeService) {}

  ngOnInit(): void {
    this.loadResumes();
  }

  loadResumes(): void{
    this.service.getAllResumes(this.page, 10).subscribe({
      next: (response) => {
        this.resumes = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
