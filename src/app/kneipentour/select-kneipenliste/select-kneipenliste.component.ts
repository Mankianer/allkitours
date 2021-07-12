import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {
  AbstractControl,
  FormControl, FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

export class Trinkort {
  constructor(public title: string, public description: string = '', public selected = false) {
  }
}

const TRINKORTE_DEMO_DATA: Trinkort[] = [
  new Trinkort('Kneipe 1'),
  new Trinkort('Kneipe 2'),
  new Trinkort('Kneipe 3'),
  new Trinkort('Kneipe 4'),
  new Trinkort('Kneipe 5'),
  new Trinkort('Kneipe 6'),
  new Trinkort('Kneipe 7'),
];

@Component({
  selector: 'select-kneipenliste',
  templateUrl: './select-kneipenliste.component.html',
  styleUrls: ['./select-kneipenliste.component.scss']
})
export class SelectKneipenlisteComponent implements OnInit {
  displayedColumns: string[] = ['kneipe', 'selected'];
  dataSource = new MatTableDataSource(TRINKORTE_DEMO_DATA);

  @Input()
  formControll: AbstractControl | null = new FormControl(null);

  selectedItems: Trinkort[] = [];
  @Output() selectedItemsEventEmitter: EventEmitter<Trinkort[]> = new EventEmitter<Trinkort[]>();


  constructor() {

  }

  ngOnInit(): void {
  }

  // @Input()
  // public setFormGroup(formGroup: FormGroup): void{
  //   formGroup.registerControl('trinkorte', this.formControll);
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async updateItem(item: Trinkort, event: MatCheckboxChange): Promise<void> {
    let index = this.selectedItems.indexOf(item);
    item.selected = event.checked;
    if (item.selected) {
      if (index == -1) this.selectedItems.push(item);
    } else {
      if (index != -1) this.selectedItems.splice(index, 1);
    }
    this.selectedItemsEventEmitter.emit(this.selectedItems);
    console.log('update' + this.formControll);
    if (this.formControll != null) {
      this.formControll.setValue(this.selectedItems);
      this.formControll.markAsDirty();
    }
  }

}
