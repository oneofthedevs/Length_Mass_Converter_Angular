import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenghtComponent } from './lenght.component';

describe('LenghtComponent', () => {
  let component: LenghtComponent;
  let fixture: ComponentFixture<LenghtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenghtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenghtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
