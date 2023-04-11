import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { ReplyComponent } from './reply/reply.component';
import { DisplayComponent } from './display/display.component';
import { ListComponent } from './list/list.component';
import { CleanComponent } from './clean/clean.component';
import { MissingComponent } from './missing/missing.component';
import { SharedModule } from '../shared/common.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InboxComponent,
    ComposeComponent,
    ReplyComponent,
    DisplayComponent,
    ListComponent,
    CleanComponent,
    MissingComponent,
    FormComponent,
  ],
  imports: [CommonModule, MailRoutingModule, SharedModule, ReactiveFormsModule],
})
export class MailModule {}
