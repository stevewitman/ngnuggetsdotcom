import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './feat/admin/admin.module';
import { HomeModule } from './feat/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feat/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./feat/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./feat/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
