import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingComponent } from './lazyloading.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [{ path: '', component: LazyloadingComponent },{ path: 'success', component: SuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
