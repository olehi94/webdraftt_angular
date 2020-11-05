import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthFormComponent } from './admin-auth-form.component';

describe('AdminAuthFormComponent', () => {
  let component: AdminAuthFormComponent;
  let fixture: ComponentFixture<AdminAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
