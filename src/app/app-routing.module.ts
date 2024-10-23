import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "annonce",
    loadChildren: () =>
      import("./features/annonce/annonce.module").then((m) => m.AnnonceModule),
  },
  { path: "**", component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
