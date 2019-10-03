import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data = ["Water plants"]

  getData() {
    return this.data
  }

  putData(str) {
    this.data.push(str)
  }
}
