import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParliamentMembersComponent } from './pages/parliament-members/parliament-members.component';

const routes: Routes = [
  {
    path: '',
    component: ParliamentMembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParliamentMembersRoutingModule {}
