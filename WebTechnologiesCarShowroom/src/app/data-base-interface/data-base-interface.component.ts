import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update, onValue, remove } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-base-interface',
  templateUrl: './data-base-interface.component.html',
  styleUrls: ['./data-base-interface.component.css']
})
export class DataBaseInterfaceComponent implements OnInit {

  // Variables ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  isDataBaseEmpty: boolean = true;
  cars!: Observable<any[]>;
  showAddCarForm: boolean = false;
  showEditCarForm: boolean = false;
  currentCarKey: string = "";
  showCarDetails: boolean = false;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(public database: Database) {
  }

  ngOnInit(): void {
      this.getCarsData();
  }

  //Data Base management methods//////////////////////////////////////////////////////////////////////////////////////////////

  // Check if database is empty ///////////////////////////////////////////////////////////////////////////////////////////////

  checkIfDatabase() {
    console.log("Klikniete");
    const databaseRef = ref(this.database, "cars/");

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      const isEmpty = !data;

      if (isEmpty) {
        this.isDataBaseEmpty = true;
      } else {
        this.isDataBaseEmpty = false;
      }

    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }

// GETTIN ALL DATA FROM DATABASE METHOD /////////////////////////////////////////////////////////////////////////////////////////////
  getCarsData() {

    const carsRef = ref(this.database, '/cars');


    this.cars = new Observable<any[]>((observer) => {
      const unsubscribe = onValue(carsRef, (snapshot) => {
        const data = snapshot.val();
        observer.next(data);
      });


      return () => unsubscribe();
    });


    this.cars.subscribe((data) => {
      console.log('Dane z bazy danych:', data);
    });
  }
/////////////////////////////////////   ADDING CARS   /////////////////////////////////////////////

addData(value: any) {
  set(ref(this.database, 'cars/' + value.car_name), {
    car_name: value.car_name,
    description: value.description,
    price: value.price
  });
  alert('Car created');
  this.showAddCarForm = false;
  this.getCarsData();
}
///////////////////////////////////////////////// SHOW FORMS //////////////////////////////////////////////////////////////

showAddForm() {
  this.showAddCarForm = true;
}

showEditForm(carKey: string) {
  this.showEditCarForm = true;
  this.currentCarKey = carKey;
}


showID(id: number) {
  console.log(id);
}

goToCarDetails(carKey: string) {
  this.currentCarKey = carKey;
  console.log(this.currentCarKey);
  this.showCarDetails = true;
}
///////////////////////////////////////////// DELETE CAR ////////////////////////////////////////////////////////////

deleteCar(carKey: string) {
  const carRef = ref(this.database, 'cars/' + carKey);

  remove(carRef)
    .then(() => {
      console.log('Samochód został pomyślnie usunięty z bazy danych.');
    })
    .catch((error) => {
      console.error('Błąd podczas usuwania samochodu:', error);
    });
}
///////////////////////////////////////////// UPDATE CAR ////////////////////////////////////////////////////////////

updateCar(carKey: string, value: any) {
  const carRef = ref(this.database, 'cars/' + carKey);

  update(carRef, {
    car_name: value.car_name,
    description: value.description,
    price: value.price
  })
    .then(() => {
      alert('Dane samochodu zostały pomyślnie zaktualizowane.');
    })
    .catch((error) => {
      console.error('Błąd podczas aktualizacji danych samochodu:', error);
    });
    this.showEditCarForm = false;
}




}
