import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsCoverComponent } from './views-cover/views-cover.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsCoverComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
