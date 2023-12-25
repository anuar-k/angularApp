import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";
import {NgForOf, CommonModule} from "@angular/common";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  imports: [
    NgForOf, CommonModule
  ],
  standalone: true
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
  }

  showTaskByCategory(category: Category){
    this.dataHandler.fillTasksByCategory(category)
  }
}
