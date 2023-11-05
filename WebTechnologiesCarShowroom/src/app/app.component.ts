import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebTechnologiesCarShowroom';

  mainPage : boolean = true;
  contactPage : boolean = false;

  displayMain(task: boolean[]) {
    this.mainPage = task[0];
    this.contactPage = task[1];
    console.log(this.mainPage)
    console.log(this.contactPage)
  }

  displayContact(task: boolean[]) {
    this.mainPage = task[0];
    this.contactPage = task[1];
    console.log(this.mainPage)
    console.log(this.contactPage)
  }
}
