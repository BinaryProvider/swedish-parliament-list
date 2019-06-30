import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ParliamentMemberList } from '../models/parliament-member-list';
import { ParliamentMember } from '../models/parliament-member';
import { PartyEnum } from '../models/party-enum';

@Injectable({
  providedIn: 'root'
})
export class ParliamentMembersService {
  constructor(private httpClient: HttpClient) {}

  readonly cacheListKey = 'parliament_members';
  readonly cacheExpiry = 604800000; // 1 week

  get cachedList(): ParliamentMember[] {
    const cache = JSON.parse(localStorage.getItem(this.cacheListKey));
    if (!cache) return;

    const timestamp = cache.timestamp ? cache.timestamp : null;

    if (this.cachedListExpired(timestamp)) {
      return null;
    }

    return cache.list ? (cache.list as ParliamentMember[]) : null;
  }

  set cachedList(list: ParliamentMember[]) {
    const cache = { list, timestamp: Date.now() };
    localStorage.setItem(this.cacheListKey, JSON.stringify(cache));
  }

  getMembers(): Observable<ParliamentMember[]> {
    const cachedList = this.cachedList;
    return cachedList ? of(cachedList).pipe(delay(100)) : this.downloadList();
  }

  private downloadList(): Observable<ParliamentMember[]> {
    return this.httpClient
      .get<ParliamentMemberList>(
        `${environment.apiUrl}/personlista/?utformat=json`
      )
      .pipe(
        map((list: ParliamentMemberList) => {
          return this.mapAndSortList(list);
        })
      );
  }

  private mapAndSortList(list: ParliamentMemberList): ParliamentMember[] {
    const mappedList = list.personlista.person
      .map((member: ParliamentMember) => {
        if (member.parti.toString() === '-') {
          member.parti = PartyEnum.NoParty;
        }
        return member;
      })
      .sort((a: ParliamentMember, b: ParliamentMember) => {
        if (a.sorteringsnamn < b.sorteringsnamn) {
          return -1;
        }
        if (a.sorteringsnamn > b.sorteringsnamn) {
          return 1;
        }
        return 0;
      });

    this.cachedList = mappedList;

    return mappedList;
  }

  private cachedListExpired(timestamp: number | null): boolean {
    if (!timestamp) return true;

    const diff = Math.abs(Date.now() - timestamp);

    return diff > this.cacheExpiry;
  }
}
