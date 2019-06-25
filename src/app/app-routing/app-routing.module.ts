import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLandInfoComponent } from '../add-land-info/add-land-info.component';

const appRoutes: Routes = [
  {
    path: 'addLand',
    component: AddLandInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
