import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByIdComponent } from './get-user-by-id.component';

describe('GetUserByIdComponent', () => {
  let component: GetUserByIdComponent;
  let fixture: ComponentFixture<GetUserByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetUserByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetUserByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
