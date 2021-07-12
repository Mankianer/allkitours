import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Kneipentour} from "../models/kneipentour-model";
import {KneipentourService} from "../../services/kneipentour/kneipentour.service";

@Component({
  selector: 'app-viewer-kneipentour',
  templateUrl: './viewer-kneipentour.component.html',
  styleUrls: ['./viewer-kneipentour.component.scss']
})
export class ViewerKneipentourComponent implements OnInit {

  public kneipentour: Kneipentour = {};

  constructor(private route: ActivatedRoute, private kneipentourService: KneipentourService) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      let kneipentour = this.kneipentourService.loadKneipentour(id);
      if(kneipentour) this.kneipentour = kneipentour;
    }
  }

}
