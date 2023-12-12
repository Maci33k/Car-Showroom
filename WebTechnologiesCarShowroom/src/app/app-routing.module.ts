import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { CarListComponent } from './car-list/car-list.component';
import { AlfaComponent } from './alfa/alfa.component';
import { KiaComponent } from './kia/kia.component';
import { FiatComponent } from './fiat/fiat.component';
import { OpelComponent } from './opel/opel.component';
import { FordComponent } from './ford/ford.component';
import { ToyotaComponent } from './toyota/toyota.component';



const routes: Routes = [{ path: '' , component:HomeComponent},
{path:"contact", component:ContactComponent},
{path:"info", component:InfoComponent},
{path:"car-list", component:CarListComponent},
{path:"login", component:LoginComponent},
{ path: 'ford' , component: FordComponent},
{ path: 'alfa' , component: AlfaComponent},
{ path: 'kia' , component: KiaComponent},
{ path: 'toyota' , component: ToyotaComponent},
{ path: 'fiat' , component: FiatComponent},
{ path: 'opel' , component: OpelComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
