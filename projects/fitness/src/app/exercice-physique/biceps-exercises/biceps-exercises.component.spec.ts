import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicepsExercisesComponent } from './biceps-exercises.component';

describe('BicepsExercisesComponent', () => {
  let component: BicepsExercisesComponent;
  let fixture: ComponentFixture<BicepsExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicepsExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BicepsExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
