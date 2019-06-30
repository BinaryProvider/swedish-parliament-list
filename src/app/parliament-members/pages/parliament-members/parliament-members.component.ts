import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ParliamentMembersService } from '../../services/parliament-members.service';
import { ParliamentMember } from '../../models/parliament-member';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-parliament-members',
  templateUrl: './parliament-members.component.html',
  styleUrls: ['./parliament-members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParliamentMembersComponent implements OnInit {
  parliamentMembers$: Observable<ParliamentMember[]>;
  partyFilter$: Observable<string[]>;

  constructor(private parliamentMembersService: ParliamentMembersService) {}

  ngOnInit() {
    this.parliamentMembers$ = this.parliamentMembersService.getMembers();
  }

  partyFilterChange(partyFilter: string[]): void {
    this.partyFilter$ = of([...partyFilter]);
  }

  showMemberDetails(member: ParliamentMember): void {}
}
