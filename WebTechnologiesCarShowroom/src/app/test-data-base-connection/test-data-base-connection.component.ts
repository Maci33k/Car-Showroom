import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Database, set, ref, update, onValue, remove } from '@angular/fire/database';

@Component({
  selector: 'app-test-data-base-connection',
  templateUrl: './test-data-base-connection.component.html',
  styleUrls: ['./test-data-base-connection.component.css']
})
export class TestDataBaseConnectionComponent {
  constructor(private httpClient: HttpClient, public database: Database){}

  addData(value: any) {
    set(ref(this.database, 'cars/' + value.username), {
      username: value.username,
      first_name: value.first_name,
      last_name: value.last_name
    });
    alert('user created');
  }

    readData(value: any) {
      const starCountRef = ref(this.database, 'users/' + value.username);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        alert(data.first_name);
      });
    }


    updateData(value: any) {
      update(ref(this.database, 'users/' + value.username), {
        username: value.username,
        first_name: value.first_name,
        last_name: value.last_name
      });
      alert('user updated');
    }


    removeData(value: any) {
      remove(ref(this.database, 'users/' + value.username));
      alert("User removed");
    }







}
