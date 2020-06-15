import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { LazyStore } from './store/lazy.store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([LazyStore])
  ]
})
export class LazyModule { }
