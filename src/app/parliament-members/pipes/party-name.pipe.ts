import { Pipe, PipeTransform } from '@angular/core';
import { PartyEnum } from '../models/party-enum';

@Pipe({ name: 'partyName' })
export class PartyNamePipe implements PipeTransform {
  transform(party: PartyEnum): string {
    switch (party) {
      case PartyEnum.C:
        return 'Centerpartiet';
      case PartyEnum.KD:
        return 'Kristdemokraterna';
      case PartyEnum.L:
        return 'Liberalerna';
      case PartyEnum.M:
        return 'Moderaterna';
      case PartyEnum.MP:
        return 'Miljöpartiet';
      case PartyEnum.NoParty:
        return 'Partilös';
      case PartyEnum.S:
        return 'Socialdemokraterna';
      case PartyEnum.SD:
        return 'Sverigedemokraterna';
      case PartyEnum.V:
        return 'Vänsterpartiet';
      default:
        return '';
    }
  }
}
