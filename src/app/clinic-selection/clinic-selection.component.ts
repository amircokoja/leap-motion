import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../shared/data/clinics.json';
import { IClinic } from '../shared/data/data.model';

@Component({
  selector: 'app-clinic-selection',
  templateUrl: './clinic-selection.component.html',
  styleUrls: ['./clinic-selection.component.scss'],
})
export class ClinicSelectionComponent implements OnInit {
  clinics: IClinic[] = data;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/start']);
  }

  onItemClicked(): void {
    this.router.navigate(['/appointment-summary']);
  }
}
