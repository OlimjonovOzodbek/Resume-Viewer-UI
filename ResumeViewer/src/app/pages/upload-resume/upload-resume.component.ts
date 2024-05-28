import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../../services/ResumeService/resume.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent {

  selectedFile: File | null = null;
  constructor(private service: ResumeService) {}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('Document', this.selectedFile);

      this.service.uploadResume(formData)
        .subscribe(
          (response) => {
            alert('Resume uploaded successfully!');
          },
          (error) => {
            console.error('Error uploading resume:', error);
          }
        );
    }
  }

}
