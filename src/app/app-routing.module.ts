import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/data/data.module').then(m => m.DataModule)
  },
  {
    path: 'data',
    loadChildren: () => import('../app/data/data.module').then(m => m.DataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
