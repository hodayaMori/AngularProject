import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {path:"AllProducts" ,component:AllProductsComponent},
  {path:"" ,redirectTo:"AllProducts",pathMatch:"full" }//ברירת מחדל בניתוב

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
