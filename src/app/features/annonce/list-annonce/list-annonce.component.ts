import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { mobilier } from 'src/app/models/mobilier';
import { DataService } from 'src/app/shared/services/dataService';

@Component({
  selector: "app-list-annonce",
  templateUrl: "./list-annonce.component.html",
  styleUrls: ["./list-annonce.component.css"],
})
export class ListAnnonceComponent implements OnInit {
  listMobilier: Array<mobilier>
  searchMobilier: string
  categoryId:any

  constructor(private DataService: DataService ,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchMobilier
    this.listMobilier = this.DataService.listMobilier
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get("id")
    })
  }
}
