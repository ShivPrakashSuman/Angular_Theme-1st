import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JQueryComponent } from './j-query.component';

describe('JQueryComponent', () => {
  let component: JQueryComponent;
  let fixture: ComponentFixture<JQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JQueryComponent]
    });
    fixture = TestBed.createComponent(JQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
