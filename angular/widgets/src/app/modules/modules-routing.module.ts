import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesCoverComponent } from './modules-cover/modules-cover.component';

const routes: Routes = [{ path: '', component: ModulesCoverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
