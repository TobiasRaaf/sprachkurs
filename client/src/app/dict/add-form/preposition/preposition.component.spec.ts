import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepositionComponent } from './preposition.component';

describe('PrepositionComponent', () => {
  let component: PrepositionComponent;
  let fixture: ComponentFixture<PrepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
