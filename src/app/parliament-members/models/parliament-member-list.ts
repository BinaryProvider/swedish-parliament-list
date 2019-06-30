import { ParliamentMember } from './parliament-member';

export interface ParliamentMemberList {
  personlista: {
    person: ParliamentMember[];
  };
}
