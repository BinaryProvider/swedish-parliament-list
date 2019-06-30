import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParliamentMemberListComponent } from './parliament-member-list.component';

describe('ParliamentMemberListComponent', () => {
  let component: ParliamentMemberListComponent;
  let fixture: ComponentFixture<ParliamentMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParliamentMemberListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
