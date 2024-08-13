import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMatSliderComponent } from './gen-mat-slider.component';

describe('GenMatSliderComponent', () => {
  let component: GenMatSliderComponent;
  let fixture: ComponentFixture<GenMatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenMatSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenMatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
