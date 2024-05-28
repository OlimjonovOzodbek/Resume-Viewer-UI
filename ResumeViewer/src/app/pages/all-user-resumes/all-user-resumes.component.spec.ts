import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserResumesComponent } from './all-user-resumes.component';

describe('AllUserResumesComponent', () => {
  let component: AllUserResumesComponent;
  let fixture: ComponentFixture<AllUserResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllUserResumesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllUserResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
