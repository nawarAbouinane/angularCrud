import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReadComponent } from './components/read/read.component';

const routes: Routes = [{path:'add',component:AddComponent},
{path:'all',component:ReadComponent},{path:'navbar',component:NavbarComponent},
{path:'edit',component:EditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
