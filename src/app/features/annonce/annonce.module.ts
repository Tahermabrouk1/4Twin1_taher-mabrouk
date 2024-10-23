import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { CardComponent } from './list-annonce/card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardDetailComponent } from './list-annonce/card/card-detail/card-detail.component';


@NgModule({
  declarations: [
    AnnonceComponent,
    CardComponent,
    ListAnnonceComponent,
    SidebarComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AnnonceModule { }
