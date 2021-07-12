import {Injectable} from '@angular/core';
import {CookiesService} from "../cookies.service";
import {Kneipentour} from "../../kneipentour/models/kneipentour-model";

const OWN_KNEIPENTOURS_COOKIE_NAME = 'ownKneipentours';

@Injectable({
  providedIn: 'root'
})
export class KneipentourService {



  private ownKneiptouren: Map<string, Kneipentour> = new Map();

  constructor(private cookies: CookiesService) {
    this.loadFromCookies();
  }

  public saveKneipentour(newKneiptour: Kneipentour): Kneipentour {
    if (newKneiptour.id == undefined) {
      newKneiptour.id = 'ID' + this.ownKneiptouren.size;
    }
    this.ownKneiptouren.set(newKneiptour.id, newKneiptour);
    this.saveToCookies();
    return newKneiptour;
  }

  public getAll(): Kneipentour[]{
    return Array.from(this.ownKneiptouren.values());
  }

  public loadKneipentour(id: string): Kneipentour | undefined{
    return this.ownKneiptouren.get(id);
  }

  private saveToCookies(){
    let text = JSON.stringify([...this.ownKneiptouren]);
    console.log(text);
    this.cookies.set(OWN_KNEIPENTOURS_COOKIE_NAME, text);
  }

  private loadFromCookies(){
    try {
      let text = this.cookies.get(OWN_KNEIPENTOURS_COOKIE_NAME);
      this.ownKneiptouren = new Map(JSON.parse(text));
    }catch (e) {
      this.ownKneiptouren = new Map();
    }
  }
}
