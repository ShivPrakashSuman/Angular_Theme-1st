import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestableExComponent } from './nestable-ex.component';

describe('NestableExComponent', () => {
  let component: NestableExComponent;
  let fixture: ComponentFixture<NestableExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestableExComponent]
    });
    fixture = TestBed.createComponent(NestableExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
