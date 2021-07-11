import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface Trinkort {
  title: string;
  description: string;
  selected: boolean;
}

const TRINKORTE_DEMO_DATA: Trinkort[] = [
  {title: 'Kneipe 1', description: 'text text', selected: false},
  {title: 'Kneipe 2', description: 'text text', selected: false},
  {title: 'Kneipe 3', description: 'text text', selected: false},
  {title: 'Kneipe 4', description: 'text text', selected: false},
  {title: 'Kneipe 5', description: 'text text', selected: false},
  {title: 'Kneipe 6', description: 'text text', selected: false}
];

@Component({
  selector: 'select-kneipenliste',
  templateUrl: './select-kneipenliste.component.html',
  styleUrls: ['./select-kneipenliste.component.scss']
})
export class SelectKneipenlisteComponent implements OnInit {
  displayedColumns: string[] = ['kneipe', 'selected'];
  dataSource = new MatTableDataSource(TRINKORTE_DEMO_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
