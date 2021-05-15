import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { JamIconModule } from "../../common/jam-icon/jam-icon.module";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
    declarations: [
        SocialMediaComponent
    ],
    exports: [
        SocialMediaComponent
    ],
  imports: [
    CommonModule,
    JamIconModule,
    MatRippleModule
  ]
})
export class SocialMediaModule { }
