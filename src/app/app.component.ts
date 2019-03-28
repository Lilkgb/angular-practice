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
  selectedTask = null;

    masterTaskList: Task [] = [
      new Task("Finish Homework", 3),
      new Task("Not go crazy", 2),
      new Task("Play Fortnite", 1)
    ];

  editTask(clickedTask){
    console.log('editTask function')
    console.log(clickedTask)
    this.selectedTask = clickedTask
  }
  addANewTask = null;
  finish(){
    console.log("finish adding a new task function");
    this.addANewTask = true;
  }
  finishEditing(){
    console.log('finishTask function')
    this.selectedTask = null;
  }
}
