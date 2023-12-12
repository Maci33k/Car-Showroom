import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {displayPicture1 : boolean = true;
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
}


