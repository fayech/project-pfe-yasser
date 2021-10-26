import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PcodedNavbarComponent } from './components/pcoded-navbar/pcoded-navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SectionComponent } from './components/section/section.component';
import { TestinghomeComponent } from './components/testinghome/testinghome.component';
import { ViewSectionComponent } from './layout/view-section/view-section.component';
import { LoginComponent } from './login/login.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {
    path:'admin',
    component:NavbarComponent,
   
  },
  {
    path:'Project',
    component:HeaderComponent,
   
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'View',
    component:ViewsComponent,
  },
  
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'testing',
    component:TestinghomeComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
