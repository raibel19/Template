import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlSensitiveService extends DefaultUrlSerializer {

  parse(url: string): UrlTree {
    return super.parse(url.toLowerCase());
  }
}
