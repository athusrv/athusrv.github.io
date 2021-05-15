import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from "@angular/router";
import { MenunavModule } from "../../components/common/menunav/menunav.module";
import { SocialMediaModule } from "../../components/home/social-media/social-media.module";
import { HomePresentationModule } from "../../components/home/home-presentation/home-presentation.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    MenunavModule,
    SocialMediaModule,
    HomePresentationModule
  ]
})
export class HomeModule { }
