import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1.component';
import {NgxPrintModule} from 'ngx-print';
import { GoogleMapsModule } from '@angular/google-maps';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    Demo1Component
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NgxPrintModule,
    GoogleMapsModule,
    NbCardModule,
  ]
})
export class Demo1Module { }
