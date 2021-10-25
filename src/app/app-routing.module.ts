import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionComponent } from './components/section/section.component';
import { ViewSectionComponent } from './layout/view-section/view-section.component';
import { LoginComponent } from './login/login.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {
    path:'admin',
    component:NavbarComponent,
   
  },
  {
    path:'dddd',
    component:ViewsComponent,
   
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    component:LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
