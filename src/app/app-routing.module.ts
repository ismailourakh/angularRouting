import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';
import { ProfComponent } from './prof/prof.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { ProfEditComponent } from './prof-edit/prof-edit.component';
import { EtudiantDetailComponent } from './etudiant-detail/etudiant-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/profs/:id', component: ProfDetailComponent },
  { path: 'admin/profs/:id/edit', component: ProfEditComponent },
  { path: 'admin/etudiants/:id', component: EtudiantDetailComponent },
  { path: 'admin/etudiants/:id/edit', component: StudentEditComponent },
  { path: 'prof', component: ProfComponent },
  { path: 'etudiant', component: EtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
