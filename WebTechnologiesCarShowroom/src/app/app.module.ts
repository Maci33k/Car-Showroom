import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlfaComponent } from './alfa/alfa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CarListComponent } from './car-list/car-list.component';
import { LoginComponent } from './login/login.component';
import { KiaComponent } from './kia/kia.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { OpelComponent } from './opel/opel.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { TestDataBaseConnectionComponent } from './test-data-base-connection/test-data-base-connection.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { DataBaseInterfaceComponent } from './data-base-interface/data-base-interface.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    AlfaComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    InfoComponent,
    CarListComponent,
    LoginComponent,
    KiaComponent,
    FiatComponent,
    FordComponent,
    OpelComponent,
    ToyotaComponent,
    TestDataBaseConnectionComponent,
    DataBaseInterfaceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
