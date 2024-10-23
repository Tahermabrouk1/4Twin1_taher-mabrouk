import { mobilier } from 'src/app/models/mobilier';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/dataService';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input()
  mobilier: mobilier;
}
