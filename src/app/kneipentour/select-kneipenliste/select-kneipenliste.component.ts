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
import {Trinkort} from "../models/trinkort-model";

export class TrinkortSelect {
  constructor(public trinkort: Trinkort, public selected = false) {
  }
}

const TRINKORTE_DEMO_DATA: TrinkortSelect[] = [
  new TrinkortSelect({title: 'Kneipe 1'}),
  new TrinkortSelect({title: 'Kneipe 2'}),
  new TrinkortSelect({title: 'Kneipe 3'}),
  new TrinkortSelect({title: 'Kneipe 4'}),
  new TrinkortSelect({title: 'Kneipe 5'}),
  new TrinkortSelect({title: 'Kneipe 6'}),
  new TrinkortSelect({title: 'Kneipe 7'})
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

  selectedItems: TrinkortSelect[] = [];
  @Output() selectedItemsEventEmitter: EventEmitter<TrinkortSelect[]> = new EventEmitter<TrinkortSelect[]>();


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

  async updateItem(item: TrinkortSelect, event: MatCheckboxChange): Promise<void> {
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
