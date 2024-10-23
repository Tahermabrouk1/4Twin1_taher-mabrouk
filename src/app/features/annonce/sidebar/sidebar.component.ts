import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/models/category';
import { mobilier } from 'src/app/models/mobilier';
import { DataService } from 'src/app/shared/services/dataService';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  listCategory: category[]


  constructor(
    private DataService: DataService,
  ) {}

  ngOnInit(): void {
    this.listCategory = this.DataService.listCategory;
    }
  }





