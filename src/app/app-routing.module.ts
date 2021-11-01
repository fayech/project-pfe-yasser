import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderStrutureComponent } from './components/folder-struture/folder-struture.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeKsrComponent } from './components/home-ksr/home-ksr.component';
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
    path:'itgc',
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
  {
    path:'folder-struture',
    component:FolderStrutureComponent,
  },
  {
    path:'ksr',
    component:HomeKsrComponent,
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
