import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventExampleComponent } from './from-event-example.component';

describe('FromEventExampleComponent', () => {
  let component: FromEventExampleComponent;
  let fixture: ComponentFixture<FromEventExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEventExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
