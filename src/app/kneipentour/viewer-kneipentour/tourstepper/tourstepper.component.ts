import {Component, Input, OnInit} from '@angular/core';
import {Kneipentour} from "../../models/kneipentour-model";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-tourstepper',
  templateUrl: './tourstepper.component.html',
  styleUrls: ['./tourstepper.component.scss']
})
export class TourstepperComponent implements OnInit {

  @Input() kneipentour: Kneipentour = {};

  constructor() {}

  ngOnInit() {
  }

}
