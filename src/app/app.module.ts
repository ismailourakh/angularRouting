import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProfComponent } from './prof/prof.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { EtudiantDetailComponent } from './etudiant-detail/etudiant-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProfEditComponent } from './prof-edit/prof-edit.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProfComponent,
    EtudiantComponent,
    NavbarComponent,
    ProfDetailComponent,
    EtudiantDetailComponent,
    ProfEditComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
