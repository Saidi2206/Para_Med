import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  addPatient(patientData: any) {
    const currentData = this.patientsData.getValue();
    const updatedData = [...currentData, patientData];
    this.patientsData.next(updatedData);
  }

  // Méthode pour récupérer les données des patients
  getPatientsDataObservable() {
    return this.patientsData.asObservable();
  }
}

