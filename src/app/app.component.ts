import { Component } from '@angular/core';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task [] = [
    new Task("Finish Homework", 3),
    new Task("Not go crazy", 2),
    new Task("Play Fortnite", 1)
  ];

  selectedTask = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask
  }
  finishEditing(){
    this.selectedTask = null;
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
