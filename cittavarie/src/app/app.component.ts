import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dati: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDati().subscribe((data) => {
      this.dati = data;
    });
  }

  ordinaAlfabeticamente() {
    this.dati.sort((a, b) => a.luogo.localeCompare(b.luogo));
  }

  ordinaPerAltitudine() {
    this.dati.sort((a, b) => b.altitudine - a.altitudine);
  }
}
