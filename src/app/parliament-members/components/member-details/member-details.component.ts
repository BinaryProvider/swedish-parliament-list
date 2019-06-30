import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ParliamentMember } from '../../models/parliament-member';
import { PartyEnum } from '../../models/party-enum';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberDetailsComponent implements OnInit {
  @Input() member: ParliamentMember;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  noParty(party: PartyEnum): boolean {
    return party === PartyEnum.NoParty;
  }

  memberProfileUrl(member: ParliamentMember): string {
    if (!member) return '';
    return `https://riksdagen.se/sv/ledamoter-partier/ledamot/${member.tilltalsnamn.toLowerCase()}-${member.efternamn.toLowerCase()}_${
      member.sourceid
    }`;
  }
}
