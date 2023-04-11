import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './auth/authorization.guard';

const routes: Routes = [
  {
    path: 'mail',
    canLoad: [AuthorizationGuard],
    loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
