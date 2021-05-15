import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavComponent } from './menunav.component';


@NgModule({
  declarations: [
    MenuNavComponent
  ],
  exports: [
    MenuNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenunavModule {
}
