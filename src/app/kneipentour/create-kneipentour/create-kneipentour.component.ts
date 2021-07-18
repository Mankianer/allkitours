import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup, ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {TrinkortSelect} from "../select-kneipenliste/select-kneipenliste.component";
import {Kneipentour} from "../models/kneipentour-model";
import {CookiesService} from "../../services/cookies.service";
import {KneipentourService} from "../../services/kneipentour/kneipentour.service";

@Component({
  selector: 'app-create-kneipentour',
  templateUrl: './create-kneipentour.component.html',
  styleUrls: ['./create-kneipentour.component.scss']
})
export class CreateKneipentourComponent implements OnInit {
  typeFormGroup: FormGroup;
  trinkorteChooseFormGroup: FormGroup;
  trinkorteSearchFormGroup: FormGroup;
  descriptionFormGroup: FormGroup;

  private kneipentour: Kneipentour = {};

  constructor(private _formBuilder: FormBuilder, private kneipentourService: KneipentourService) {

    this.typeFormGroup = this._formBuilder.group({
      type: ['A', [Validators.required]]
    });
    this.trinkorteChooseFormGroup = this._formBuilder.group({
      trinkorte: [[], [Validators.required, trinkortSelectValidator]]
    });
    this.trinkorteSearchFormGroup = this._formBuilder.group({
      position: [null, []],
      options: [null],
      filters: [null],
      search: [''],
    });
    this.descriptionFormGroup = this._formBuilder.group({
      title: ['Unbenannte Kneipentour', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.descriptionFormGroup.statusChanges.subscribe(value => {
      if (value === 'VALID') this.finish();
    });
  }

  finish(): void {
    if (this.descriptionFormGroup.valid) {
      let kneipentour: Kneipentour = {
        id: this.kneipentour.id,
        title: this.descriptionFormGroup.get('title')?.value,
        description: this.descriptionFormGroup.get('description')?.value,
        category: this.descriptionFormGroup.get('category')?.value,
        trinkorte: this.trinkorteChooseFormGroup.get('trinkorte')?.value
      };

      this.kneipentour = this.kneipentourService.saveKneipentour(kneipentour);
    }
  }

}

export function trinkortSelectValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let badValues: any[] = [];
    const forbidden = Array.isArray(control.value) && control.value.length && control.value.every((value, index, array) => {
      if (!(value instanceof TrinkortSelect)) {
        badValues.push(value);
        return false;
      }
      return true;
    });
    return forbidden ? {badValues: {value: control.value, values: badValues}} : null;
  };
}
