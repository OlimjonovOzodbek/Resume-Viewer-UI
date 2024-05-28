import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResumesComponent } from './all-resumes.component';

describe('AllResumesComponent', () => {
  let component: AllResumesComponent;
  let fixture: ComponentFixture<AllResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllResumesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
