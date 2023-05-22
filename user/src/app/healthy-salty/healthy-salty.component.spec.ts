import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthySaltyComponent } from './healthy-salty.component';

describe('HealthySaltyComponent', () => {
  let component: HealthySaltyComponent;
  let fixture: ComponentFixture<HealthySaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthySaltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthySaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
