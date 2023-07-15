import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/component/sidenav.component';
import { BodyComponent } from '../pages/body/component/body.component';


@NgModule({
  declarations: [
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    BodyComponent
  ]
})
export class CoreModule { }
