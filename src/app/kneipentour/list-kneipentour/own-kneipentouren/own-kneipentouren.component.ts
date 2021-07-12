import { Component, OnInit } from '@angular/core';
import {KneipentourService} from "../../../services/kneipentour/kneipentour.service";

@Component({
  selector: 'app-own-kneipentouren',
  templateUrl: './own-kneipentouren.component.html',
  styleUrls: ['./own-kneipentouren.component.scss']
})
export class OwnKneipentourenComponent implements OnInit {

  constructor(public kneipentourService: KneipentourService) { }


  ngOnInit(): void {
  }

}
