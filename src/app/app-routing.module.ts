import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/parliament-members', pathMatch: 'full' },
  {
    path: 'parliament-members',
    loadChildren: () =>
      import('./parliament-members/parliament-members.module').then(
        m => m.ParliamentMembersModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
