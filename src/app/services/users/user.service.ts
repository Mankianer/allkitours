import {Injectable} from '@angular/core';
import {GunService} from "../gun/gun.service";
import any = jasmine.any;
import {IGunCryptoKeyPair} from "gun/types/types";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private gunUser = this.gunService.gun.user();

  constructor(private gunService: GunService) {
  }

  // public isLoggedIn(): boolean {
  //   // return this.gunUser.is;
  // }

  public logout() {
      return this.gunUser.leave();
  }

  public createUser(alias: string, password: string, cb?: (ack: CREATE_STATUS) => void): void {
    this.gunUser.create(alias, password, (ack) => {
      let obj: { err?: string, ok?: number, pub?: string } = ack;
      if (obj?.ok) {
        cb?.call(this, CREATE_STATUS.SUCCESSFUL);
      } else if (obj?.err === 'User already created!') {
        cb?.call(this, CREATE_STATUS.ALREADY_CREATED);
      } else {
        cb?.call(this, CREATE_STATUS.ERROR);
      }
    });
  }

  public auth(alias: string, password: string, cb?: (ack: STATUS) => void) {
    this.gunUser.auth(alias, password, (ack) => {
      let obj: {
        ack?: number;
        get?: string;
        on?: (...args: [unknown, unknown, unknown]) => unknown;
        put?: {
          alias: string;
          auth: any;
          epub: string;
          pub: string;
        };
        sea?: IGunCryptoKeyPair;
        soul?: string;
        err?: string;
      } = ack;
      if (obj?.ack) {
        cb?.call(this, STATUS.SUCCESSFUL);
        console.log('Success');
      } else {
        cb?.call(this, STATUS.ERROR);
      }
    });
  }

  public changePassword(alias: string, password_old: string, password_new: string,  cb?: (ack: STATUS) => void) {
    this.gunUser.auth(alias, password_old, (ack) => {
      let obj: {
        ack?: number;
        get?: string;
        on?: (...args: [unknown, unknown, unknown]) => unknown;
        put?: {
          alias: string;
          auth: any;
          epub: string;
          pub: string;
        };
        sea?: IGunCryptoKeyPair;
        soul?: string;
        err?: string;
      } = ack;
      if (!obj?.err) {
        cb?.call(this, STATUS.SUCCESSFUL);
        console.log('Success');
      } else if(obj.err === 'Wrong user or password.') {
        cb?.call(this, STATUS.WRONG_PASSWORD);
      } else {
        cb?.call(this, STATUS.ERROR);
        console.log('Login Error: ' + obj?.err)
      }
    }, {change: password_new});
  }
}

enum CREATE_STATUS {
  ERROR,
  SUCCESSFUL,
  ALREADY_CREATED
}

enum STATUS {
  ERROR,
  SUCCESSFUL,
  WRONG_PASSWORD
}
