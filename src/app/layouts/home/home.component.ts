import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';
import { mobilier } from 'src/app/models/mobilier';
import { DataService } from 'src/app/shared/services/dataService';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  listMobilier: Array<mobilier>
  listCategory: Array<category>
  searchMobilier: string

  constructor(private DataService: DataService ) {}

  ngOnInit(): void {
    this.searchMobilier
    this.listMobilier = this.DataService.listMobilier
    this.listCategory = this.DataService.listCategory
  }

}
