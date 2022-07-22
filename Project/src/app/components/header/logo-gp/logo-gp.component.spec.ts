import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGpComponent } from './logo-gp.component';

describe('LogoGpComponent', () => {
  let component: LogoGpComponent;
  let fixture: ComponentFixture<LogoGpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
