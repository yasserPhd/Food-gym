import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { CoachComponent } from './coach/coach.component';
import { EditNutritionComponent } from './edit-nutrition/edit-nutrition.component';
import { NewAlimentComponent } from './new-aliment/new-aliment.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NutritionComponent } from './nutrition/nutrition.component';
const routes: Routes = [
  {
    path:"clients",component:ClientsComponent
  },
  {
    path:"new-client",component:NewClientComponent
  }
 ,
 {
  path:"edit-aliment/:id",component:EditNutritionComponent
},
 {
  path:"coaches",component:CoachComponent
}
 ,
 {
  path:"aliments",component:NutritionComponent
},
{
  path:"new-aliment",component:NewAlimentComponent},
 {
   path:"", redirectTo:"/clients", pathMatch:'full'
 }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
