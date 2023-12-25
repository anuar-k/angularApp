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
    selectedCategory: Category;

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit() {
        this.dataHandler.categorySubject.subscribe(categories => this.categories = categories)
    }

    showTaskByCategory(category: Category) {
        this.selectedCategory = category;
        this.dataHandler.fillTasksByCategory(category)
    }
}
