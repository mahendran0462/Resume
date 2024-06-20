import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { DataRoutingModule } from './data-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DataRoutingModule
  ],
  exports: [ MaterialModule ]
})
export class DataModule { }
