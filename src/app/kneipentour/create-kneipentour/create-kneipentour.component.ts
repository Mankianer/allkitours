import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup, ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Trinkort} from "../select-kneipenliste/select-kneipenliste.component";

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

  constructor(private _formBuilder: FormBuilder) {

    this.typeFormGroup = this._formBuilder.group({
      type: ['A', [Validators.required]]
    });
    this.trinkorteChooseFormGroup = this._formBuilder.group({
      trinkorte: [[], [Validators.required, trinkortSelectValidator]]
    });
    this.trinkorteSearchFormGroup = this._formBuilder.group({
      position: [ null, []],
      options: [null],
      filters: [null],
      search: [''],
    });
    this.descriptionFormGroup = this._formBuilder.group({
      title: [ 'Unbenannte Kneipentour', [Validators.required]],
      description: [ '', [Validators.required]],
      category: [ '', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  finish(): void{
    // console.log('value: ' + this.firstFormGroup.get('firstCtrl')?.value);
  }

}

export function trinkortSelectValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let badValues: any[] = [];
    const forbidden = Array.isArray(control.value) && control.value.length && control.value.every((value, index, array) => {
      if (!(value instanceof Trinkort)) {
        badValues.push(value);
        return false;
      }
      return true;
    });
    console.log('test: ' + {badValues: {value: control.value, values: badValues}});
    return forbidden ? {badValues: {value: control.value, values: badValues}} : null;
  };
}
