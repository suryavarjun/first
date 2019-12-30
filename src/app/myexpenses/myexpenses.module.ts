import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyexpensesPage } from './myexpenses.page';

const routes: Routes = [
  {
    path: '',
    children:[{
      path:'',
      component: MyexpensesPage
    },
    {
      path:'finn-view',
      loadChildren:'./finn-view.module#FinnViewPageModule'
     },
    {
      path:'benview',
      loadChildren:'../benview.module#BenviewPageModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyexpensesPage]
})
export class MyexpensesPageModule {}
