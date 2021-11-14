import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddPostPageComponent } from './admin-add-post/add-post-page.component';

import { MatButtonModule } from '@angular/material/button';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

@NgModule({
  declarations: [AddPostPageComponent, AdminHomePageComponent],
  imports: [CommonModule, AdminRoutingModule, MatButtonModule],
  exports: [AddPostPageComponent],
})
export class AdminModule {}
