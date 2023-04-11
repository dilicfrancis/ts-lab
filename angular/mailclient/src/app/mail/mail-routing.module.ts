import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { CleanComponent } from './clean/clean.component';
import { DisplayComponent } from './display/display.component';
import { MessageResolver } from './message.resolver';
import { MissingComponent } from './missing/missing.component';

const routes: Routes = [
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
  {
    path: 'inbox',
    component: InboxComponent,
    children: [
      { path: 'deleted', component: MissingComponent },
      {
        path: ':id',
        component: DisplayComponent,
        resolve: { message: MessageResolver },
      },
      { path: '', component: CleanComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailRoutingModule {}
