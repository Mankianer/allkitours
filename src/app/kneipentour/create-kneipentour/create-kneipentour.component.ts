import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
      trinkorte: [ null, []]
    });
    this.trinkorteSearchFormGroup = this._formBuilder.group({
      position: [ null, []],
      options: [null],
      filters: [null],
      search: [''],
    });
    this.descriptionFormGroup = this._formBuilder.group({
      titel: [ 'Unbenannte Kneipentour', [Validators.required]],
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
