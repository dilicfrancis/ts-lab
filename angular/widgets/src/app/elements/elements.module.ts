import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsCoverComponent } from './elements-cover/elements-cover.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RepeatDirective } from './repeat.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElementsCoverComponent, PlaceholderComponent, RepeatDirective, SegmentComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  exports: [],
})
export class ElementsModule {}
