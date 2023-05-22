import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthySweetComponent } from './healthy-sweet.component';

describe('HealthySweetComponent', () => {
  let component: HealthySweetComponent;
  let fixture: ComponentFixture<HealthySweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthySweetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthySweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
