import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionComponent } from './components/section/section.component';
import { PcodedNavbarComponent } from './components/pcoded-navbar/pcoded-navbar.component';
import { ViewsComponent } from './views/views.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ViewSectionComponent } from './layout/view-section/view-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestingdetailsComponent } from './components/testingdetails/testingdetails.component';
import { TestinghomeComponent } from './components/testinghome/testinghome.component';
import { FolderStrutureComponent } from './components/folder-struture/folder-struture.component';
import { FolderComponent } from './folder/folder.component';
import { ChangeProcessComponent } from './components/change-process/change-process.component';
import { PasswordSecComponent } from './components/password-sec/password-sec.component';
import { KsrComponent } from './components/ksr/ksr.component';
import { HomeKsrComponent } from './components/home-ksr/home-ksr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SectionComponent,
    PcodedNavbarComponent,
    ViewsComponent,
    LoginComponent,
    ViewSectionComponent,
    ProjectsComponent,
    TestingdetailsComponent,
    TestinghomeComponent,
    FolderStrutureComponent,
    FolderComponent,
    ChangeProcessComponent,
    PasswordSecComponent,
    KsrComponent,
    HomeKsrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    BrowserAnimationsModule, // required animations module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
