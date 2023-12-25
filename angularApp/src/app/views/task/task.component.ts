import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [
        NgForOf,
        DatePipe
    ],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
    tasks: Task[]

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit(): void {
        this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks)
    }

    toggleTaskCompeted(task: Task) {
        this.dataHandler.changeTaskCompleted(task)
    }
}
