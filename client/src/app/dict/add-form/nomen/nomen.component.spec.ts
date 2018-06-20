import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenComponent } from './nomen.component';

describe('NomenComponent', () => {
  let component: NomenComponent;
  let fixture: ComponentFixture<NomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
