import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsCoverComponent } from './elements-cover/elements-cover.component';

const routes: Routes = [{ path: '', component: ElementsCoverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
