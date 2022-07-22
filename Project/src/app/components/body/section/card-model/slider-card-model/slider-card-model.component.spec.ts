import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCardModelComponent } from './slider-card-model.component';

describe('SliderCardModelComponent', () => {
  let component: SliderCardModelComponent;
  let fixture: ComponentFixture<SliderCardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
