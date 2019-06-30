import { PartyEnum } from './party-enum';

export interface ParliamentMember {
  tilltalsnamn: string;
  efternamn: string;
  sorteringsnamn: string;
  parti: PartyEnum;
  status: string;
  valkrets: string;
  bild_url_192: string;
  fodd_ar: number;
  intressent_id: number;
}
