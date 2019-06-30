import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyFilterComponent } from './party-filter.component';

describe('PartyFilterComponent', () => {
  let component: PartyFilterComponent;
  let fixture: ComponentFixture<PartyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
