import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  pagesArray: boolean[] = [true, false];


  @Output()
  eventTask = new EventEmitter<boolean[]>();


  displayPicture1 : boolean = true;
  displayPicture2 : boolean = false;
  displayPicture3 : boolean = false;
  displayPicture4 : boolean = false;
  displayPicture5 : boolean = false;
  displayPicture6 : boolean = false;

  switchPicture1() {
    if (this.displayPicture1 == false) {
      this.displayPicture1 = true;
      this.displayPicture2 = false;
      this.displayPicture3 = false;
      this.displayPicture4 = false;
      this.displayPicture5 = false;
      this.displayPicture6 = false;
    }
  }

  switchPicture2() {
    if (this.displayPicture2 == false) {
      this.displayPicture1 = false;
      this.displayPicture2 = true;
      this.displayPicture3 = false;
      this.displayPicture4 = false;
      this.displayPicture5 = false;
      this.displayPicture6 = false;
    }
  }

  switchPicture3() {
    if (this.displayPicture3 == false) {
      this.displayPicture1 = false;
      this.displayPicture2 = false;
      this.displayPicture3 = true;
      this.displayPicture4 = false;
      this.displayPicture5 = false;
      this.displayPicture6 = false;
    }
  }

  switchPicture4() {
    if (this.displayPicture4 == false) {
      this.displayPicture1 = false;
      this.displayPicture2 = false;
      this.displayPicture3 = false;
      this.displayPicture4 = true;
      this.displayPicture5 = false;
      this.displayPicture6 = false;
    }
  }

  switchPicture5() {
    if (this.displayPicture5 == false) {
      this.displayPicture1 = false;
      this.displayPicture2 = false;
      this.displayPicture3 = false;
      this.displayPicture4 = false;
      this.displayPicture5 = true;
      this.displayPicture6 = false;
    }
  }

  switchPicture6() {
    if (this.displayPicture6 == false) {
      this.displayPicture1 = false;
      this.displayPicture2 = false;
      this.displayPicture3 = false;
      this.displayPicture4 = false;
      this.displayPicture5 = false;
      this.displayPicture6 = true;
    }
  }

  displayMain(task: boolean[]) {
    task[0] = true;
    task[1] = false;
    this.eventTask.emit(task);
  }

  displayContact(task: boolean[]) {
    task[0] = false;
    task[1] = true;
    this.eventTask.emit(task);
  }









}

