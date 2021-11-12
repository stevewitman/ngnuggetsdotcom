import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostPageComponent } from './admin-add-post/add-post-page.component';

const routes: Routes = [
  {
    path: 'add-post',
    component: AddPostPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
