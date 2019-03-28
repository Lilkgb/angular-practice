import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../model/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() selectedTask: Task;
  @Output() clickedDone = new EventEmitter();

  constructor() { }

  finishEditing(){
    this.clickedDone.emit();
  }
  ngOnInit() {
  }

}
