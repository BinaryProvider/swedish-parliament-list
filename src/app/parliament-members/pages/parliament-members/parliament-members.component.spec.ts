import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentMembersComponent } from './parliament-members.component';

describe('ParliamentMembersComponent', () => {
  let component: ParliamentMembersComponent;
  let fixture: ComponentFixture<ParliamentMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParliamentMembersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
