import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JamIconComponent } from './jam-icon.component';



@NgModule({
    declarations: [
        JamIconComponent
    ],
    exports: [
        JamIconComponent
    ],
    imports: [
        CommonModule
    ]
})
export class JamIconModule { }
