import { category } from 'src/app/models/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class mobilier {
  id: number
  nomMobilier: string
  description: string
  prix: number
  type: string
  etat: string
  localisation: string
  images: string
  disponibilite: boolean
  dateAjout: Date
  category : category
}
