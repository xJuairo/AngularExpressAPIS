import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherMapComponent } from './open-weather-map.component';

describe('OpenWeatherMapComponent', () => {
  let component: OpenWeatherMapComponent;
  let fixture: ComponentFixture<OpenWeatherMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenWeatherMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWeatherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
