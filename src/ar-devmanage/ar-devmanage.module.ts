import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import everything from container folder
import * as fromContainer from './containers';
import { ArDevmanageRoutingModule } from './ar-devmanage-routing.module';
import { AppMaterialModule } from '../app/app-material.module';



@NgModule({
  imports: [
    CommonModule,
    ArDevmanageRoutingModule,
    AppMaterialModule
  ],
  declarations: [
    ...fromContainer.containers
  ]
})
export class ArDevmanageModule { }
