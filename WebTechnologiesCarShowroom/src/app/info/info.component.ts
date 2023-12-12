import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {active = 'top';  activeButtonColor: string = 'danger'; // Imposta il colore a 'danger' per il rosso
isButtonActive: boolean = true; // Imposta lo stato iniziale del pulsante

toggleButtonState() {
  this.isButtonActive = !this.isButtonActive;
}
}