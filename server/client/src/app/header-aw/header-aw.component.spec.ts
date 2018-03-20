import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAwComponent } from './header-aw.component';

describe('HeaderAwComponent', () => {
  let component: HeaderAwComponent;
  let fixture: ComponentFixture<HeaderAwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
