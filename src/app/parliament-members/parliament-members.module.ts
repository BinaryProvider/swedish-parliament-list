import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ParliamentMembersComponent } from './pages/parliament-members/parliament-members.component';
import { ParliamentMembersRoutingModule } from './parliament-members.routing.module';
import { PartyNamePipe } from './pipes/party-name.pipe';
import { ParliamentMemberListComponent } from './components/parliament-member-list/parliament-member-list.component';
import { PartyLogoPipe } from './pipes/party-logo.pipe';
import { PartyColorPipe } from './pipes/party-color.pipe';
import { PartyFilterComponent } from './components/party-filter/party-filter.component';

@NgModule({
  imports: [SharedModule, ParliamentMembersRoutingModule],
  declarations: [
    ParliamentMembersComponent,
    ParliamentMemberListComponent,
    PartyFilterComponent,
    PartyNamePipe,
    PartyLogoPipe,
    PartyColorPipe
  ]
})
export class ParliamentMembersModule {}
