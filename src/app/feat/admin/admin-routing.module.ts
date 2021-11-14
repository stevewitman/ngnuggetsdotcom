import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostPageComponent } from './admin-add-post/add-post-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePageComponent,
  },
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
