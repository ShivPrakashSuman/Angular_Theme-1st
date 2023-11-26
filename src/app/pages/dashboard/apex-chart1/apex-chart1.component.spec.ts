import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexChart1Component } from './apex-chart1.component';

describe('ApexChart1Component', () => {
  let component: ApexChart1Component;
  let fixture: ComponentFixture<ApexChart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexChart1Component]
    });
    fixture = TestBed.createComponent(ApexChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
