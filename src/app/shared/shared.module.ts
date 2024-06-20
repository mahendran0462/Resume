import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent
  ],
  exports: [MaterialModule]
})
export class SharedModule { }
