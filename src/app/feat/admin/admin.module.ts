import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddPostPageComponent } from './admin-add-post/add-post-page.component';

@NgModule({
  declarations: [AddPostPageComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AddPostPageComponent],
})
export class AdminModule {}
