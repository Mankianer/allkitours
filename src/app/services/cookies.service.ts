import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) {
  }

  public set(key: string, value: string): void {
    this.cookieService.set(key, value, { path: '/'});
  }

  public get(key: string): string {
    return this.cookieService.get(key);
  }

  public delete(key: string): void {
    this.cookieService.delete(key, '/');
  }
}
