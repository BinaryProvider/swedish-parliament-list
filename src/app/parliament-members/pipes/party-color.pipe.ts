import { Pipe, PipeTransform } from '@angular/core';
import { PartyEnum } from '../models/party-enum';

@Pipe({ name: 'partyColor' })
export class PartyColorPipe implements PipeTransform {
  transform(party: PartyEnum): string {
    switch (party) {
      case PartyEnum.C:
        return '#026d41';
      case PartyEnum.KD:
        return '#005ea1';
      case PartyEnum.L:
        return '#0068b2';
      case PartyEnum.M:
        return '#8fd8f8';
      case PartyEnum.MP:
        return '#0baa4c';
      case PartyEnum.NoParty:
        return 'transparent';
      case PartyEnum.S:
        return '#e30727';
      case PartyEnum.SD:
        return '#60c6f2';
      case PartyEnum.V:
        return '#e0342b';
      default:
        return 'transparent';
    }
  }
}
