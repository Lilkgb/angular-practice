import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  @Output() addTask = new EventEmitter();

  constructor() { }
  editButtonClicked(taskToEdit: Task){
    console.log("editButtonClicked function")
    console.log(taskToEdit);
    this.clickSender.emit(taskToEdit);
  }

  ngOnInit() {
  }

  addNewTask(taskToAdd: Task){
    console.log("addNewTask function")
    this.addTask.emit(taskToAdd);
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3 || currentTask.priority === '3'){
      return "red";
    } else if (currentTask.priority === 2 || currentTask.priority === '2'){
      return "yellow";
    } else {
      return "green";
    }
  }
}
