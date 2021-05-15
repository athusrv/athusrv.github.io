import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePresentationComponent } from './home-presentation.component';
import { MatButtonModule } from "@angular/material/button";



@NgModule({
    declarations: [
        HomePresentationComponent
    ],
    exports: [
        HomePresentationComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class HomePresentationModule { }
