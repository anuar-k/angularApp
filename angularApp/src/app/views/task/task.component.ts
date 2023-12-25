import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {NgForOf} from "@angular/common";
import {take} from "rxjs";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  tasks: Task[]

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.tasks = this.dataHandler.getTasks();
  }

  protected readonly take = take;
}
