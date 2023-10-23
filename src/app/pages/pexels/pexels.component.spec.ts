import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexelsComponent } from './pexels.component';

describe('PexelsComponent', () => {
  let component: PexelsComponent;
  let fixture: ComponentFixture<PexelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PexelsComponent]
    });
    fixture = TestBed.createComponent(PexelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
