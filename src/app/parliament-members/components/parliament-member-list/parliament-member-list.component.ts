import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { ParliamentMember } from '../../models/parliament-member';
import { PartyEnum } from '../../models/party-enum';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';

@Component({
  selector: 'app-parliament-member-list',
  templateUrl: './parliament-member-list.component.html',
  styleUrls: ['./parliament-member-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParliamentMemberListComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Output() rowClick = new EventEmitter<ParliamentMember>();

  @Input() set parliamentMembers(members: ParliamentMember[]) {
    if (!members) return;
    this.members = members;
    this.refreshDataSource();
  }

  @Input() set partyFilter(partyFilter: string[]) {
    this.visibleParties = partyFilter;
    this.refreshDataSource();
  }

  readonly numberOfMembers = 349;

  dataSource: MatTableDataSource<ParliamentMember> = new MatTableDataSource();

  private visibleParties: string[];
  private members: ParliamentMember[];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(
      Array.from({ length: this.numberOfMembers })
    );

    this.sort.active = 'parti';
    this.sort.direction = 'asc';
  }

  isPartyMember(member: ParliamentMember): boolean {
    if (!member) return false;
    return member.parti !== PartyEnum.NoParty;
  }

  trackByMember(index: number, member: ParliamentMember): number {
    return member ? member.intressent_id : index;
  }

  private refreshDataSource(): void {
    this.dataSource.data = this.filterMembers(this.members);
    this.dataSource.sort = this.sort;
  }

  private filterMembers(members: ParliamentMember[]): ParliamentMember[] {
    if (!members || !this.visibleParties) return [];

    return members.filter((member: ParliamentMember) =>
      this.visibleParties.includes(member.parti)
    );
  }
}
