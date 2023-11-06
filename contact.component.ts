import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  pagesArray: boolean[] = [true, false];

  displayContact(task: boolean[]) {
    task[0] = false;
    task[1] = true;
    this.eventTask.emit(task);
  }

  @Output()
  eventTask = new EventEmitter<boolean[]>();


  displayMain(task: boolean[]) {
    task[0] = true;
    task[1] = false;
    this.eventTask.emit(task);
  }
}
