import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionContainerComponent } from './session-container.component';

describe('SessionContainerComponent', () => {
  let component: SessionContainerComponent;
  let fixture: ComponentFixture<SessionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
