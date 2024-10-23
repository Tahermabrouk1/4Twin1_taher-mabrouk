import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { CardDetailComponent } from './list-annonce/card/card-detail/card-detail.component';

const routes: Routes = [
  {
    path: "",
    component: AnnonceComponent,
    children: [
      { path: "list", component: ListAnnonceComponent }, 
      { path: "list/:id", component: ListAnnonceComponent },
      { path: "list/details/:id", component: CardDetailComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnonceRoutingModule { }
