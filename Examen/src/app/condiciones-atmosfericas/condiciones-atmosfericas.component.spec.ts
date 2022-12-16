import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesAtmosfericasComponent } from './condiciones-atmosfericas.component';

describe('CondicionesAtmosfericasComponent', () => {
  let component: CondicionesAtmosfericasComponent;
  let fixture: ComponentFixture<CondicionesAtmosfericasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesAtmosfericasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesAtmosfericasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
