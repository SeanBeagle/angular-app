import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  names = ['sean', 'mary', 'noah', 'hans', 'debi'];
  constructor() {}

  public getNames(): string[] {
    return this.names;
  }

  public addName(name: string) {
    if (!this.names.includes(name)) {
      this.names.push(name);
    }
  }
}