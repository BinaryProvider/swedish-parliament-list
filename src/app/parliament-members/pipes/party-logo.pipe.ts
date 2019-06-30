import { Pipe, PipeTransform } from '@angular/core';
import { PartyEnum } from '../models/party-enum';

@Pipe({ name: 'partyLogo' })
export class PartyLogoPipe implements PipeTransform {
  transform(party: PartyEnum): string {
    return this.partyLogo(party);
  }

  private partyLogo(party: PartyEnum): string {
    return `assets/images/logo-${party.toLowerCase()}.png`;
  }
}
