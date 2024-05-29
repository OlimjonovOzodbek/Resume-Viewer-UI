import { Component } from '@angular/core';
import { ResumeService } from '../../services/ResumeService/resume.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {

  constructor(private service: ResumeService, private route: ActivatedRoute) {}

  downloadResume(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id!).subscribe({
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
