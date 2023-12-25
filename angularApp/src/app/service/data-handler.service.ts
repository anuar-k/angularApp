import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import * as Rx from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataHandlerService {

    taskSubject = new Rx.BehaviorSubject<Task[]>([]);
    categorySubject = new Rx.BehaviorSubject<Category[]>([]);

    constructor() {
        this.fillTasks()
        this.fillCategory()
    }

    fillTasks() {
        this.taskSubject.next(TestData.tasks)
    }

    fillCategory() {
        this.categorySubject.next(TestData.categories)
    }

    fillTasksByCategory(category: Category) {
        const tasks = TestData.tasks.filter(value => value.category === category)
        this.taskSubject.next(tasks)
    }

    changeTaskCompleted(task: Task) {
        task.completed = !task.completed
    }
}
