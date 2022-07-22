import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciecompComponent } from './anunciecomp.component';

describe('AnunciecompComponent', () => {
  let component: AnunciecompComponent;
  let fixture: ComponentFixture<AnunciecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnunciecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
