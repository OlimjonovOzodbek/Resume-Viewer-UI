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

  downloadResume(): void {
    this.service.getById('0a6869fc-6788-4abe-892a-2373321e8453').subscribe({
      next: (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
