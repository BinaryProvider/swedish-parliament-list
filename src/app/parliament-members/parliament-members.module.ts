import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ParliamentMembersComponent } from './pages/parliament-members/parliament-members.component';
import { ParliamentMembersRoutingModule } from './parliament-members.routing.module';
import { PartyNamePipe } from './pipes/party-name.pipe';
import { ParliamentMemberListComponent } from './components/parliament-member-list/parliament-member-list.component';
import { PartyLogoPipe } from './pipes/party-logo.pipe';
import { PartyColorPipe } from './pipes/party-color.pipe';
import { PartyFilterComponent } from './components/party-filter/party-filter.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';

@NgModule({
  imports: [SharedModule, ParliamentMembersRoutingModule],
  declarations: [
    PartyNamePipe,
    PartyLogoPipe,
    PartyColorPipe,
    ParliamentMembersComponent,
    ParliamentMemberListComponent,
    PartyFilterComponent,
    MemberDetailsComponent
  ]
})
export class ParliamentMembersModule {}
