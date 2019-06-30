import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { PartyEnum } from '../../models/party-enum';

@Component({
  selector: 'app-party-filter',
  templateUrl: './party-filter.component.html',
  styleUrls: ['./party-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyFilterComponent implements OnInit {
  @Output() partyFilterChange = new EventEmitter<string[]>();

  partyFilter: string[] = [];

  constructor() {}

  get allParties(): PartyEnum[] {
    return Object.keys(PartyEnum).map((key: string) => PartyEnum[key]);
  }

  ngOnInit() {
    this.partyFilter = [...this.allParties];
    this.partyFilterChange.emit(this.partyFilter);
  }

  isPartySelected(party: PartyEnum): boolean {
    return this.partyFilter.length === 1 && this.partyFilter.includes(party);
  }

  isValidParty(party: PartyEnum): boolean {
    return party !== PartyEnum.NoParty;
  }

  isAllPartiesSelected(): boolean {
    return this.partyFilter.length === this.allParties.length;
  }

  toggle(parties: PartyEnum[]): void {
    this.partyFilter = [...parties];
    this.partyFilterChange.emit(this.partyFilter);
  }

  toggleAll(): void {
    this.partyFilter = [...this.allParties];
    this.partyFilterChange.emit(this.partyFilter);
  }
}
