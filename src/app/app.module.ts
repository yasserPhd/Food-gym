import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoachComponent } from './coach/coach.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { NewAlimentComponent } from './new-aliment/new-aliment.component';
import { EditNutritionComponent } from './edit-nutrition/edit-nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    CoachComponent,
    NutritionComponent,
    NewAlimentComponent,
    EditNutritionComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
