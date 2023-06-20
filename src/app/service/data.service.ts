import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private admins = [
    { id: 1, name: 'Admin 1', email: 'admin1@example.com' },
    { id: 2, name: 'Admin 2', email: 'admin2@example.com' },
    { id: 3, name: 'Admin 3', email: 'admin3@example.com' },
  ];

  private profs = [
    { id: 1, name: 'Prof 1', email: 'prof1@example.com' },
    { id: 2, name: 'Prof 2', email: 'prof2@example.com' },
    { id: 3, name: 'Prof 3', email: 'prof3@example.com' },
  ];

  private etudiants = [
    { id: 1, name: 'Etudiant 1', email: 'etudiant1@example.com' },
    { id: 2, name: 'Etudiant 2', email: 'etudiant2@example.com' },
    { id: 3, name: 'Etudiant 3', email: 'etudiant3@example.com' },
  ];

  getAdmins() {
    return this.admins;
  }

  getAdminById(id: number) {
    return this.admins.find((admin) => admin.id === id);
  }

  getProfs() {
    return this.profs;
  }

  getProfById(id: number) {
    return this.profs.find((prof) => prof.id === id);
  }

  getEtudiants() {
    return this.etudiants;
  }

  getEtudiantById(id: number) {
    return this.etudiants.find((etudiant) => etudiant.id === id);
  }
}
