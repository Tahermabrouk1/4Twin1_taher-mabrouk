import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mobilier } from 'src/app/models/mobilier';
import { DataService } from 'src/app/shared/services/dataService';

@Component({
  selector: "app-card-detail",
  templateUrl: "./card-detail.component.html",
  styleUrls: ["./card-detail.component.css"],
})
export class CardDetailComponent implements OnInit {
  cardDetails: any
  errorMessage: string = ""

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const mobilierId = this.route.snapshot.paramMap.get("id")

    if (mobilierId) {
      this.cardDetails = this.dataService.listMobilier.find(
        (mobilier) => mobilier.id == +mobilierId
      )

      if (!this.cardDetails) {
        this.errorMessage = "Product not found."
      }
    } else {
      this.errorMessage = "Invalid product ID."
    }
  }
}
