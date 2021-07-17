import { Injectable } from '@angular/core';
import Gun from 'gun';
import 'gun/sea';

// const Gun = require('gun');

const gunConfig = {
  peers: [],
  modules: {}
};

@Injectable({
  providedIn: 'root'
})
export class GunService {

  public gun;

  constructor() {
    this.gun = new Gun<State>({});

    // Gun.SEA.pair((pair) => {}).then((pair) => console.log(pair));
  }
}
