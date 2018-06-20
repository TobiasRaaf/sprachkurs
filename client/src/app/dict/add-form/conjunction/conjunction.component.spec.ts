import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjunctionComponent } from './conjunction.component';

describe('ConjunctionComponent', () => {
  let component: ConjunctionComponent;
  let fixture: ComponentFixture<ConjunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
