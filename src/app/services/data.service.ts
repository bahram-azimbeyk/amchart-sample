import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSimpleData(): any[] {
    return [{
      country: "USA",
      value: 2025
    }, {
      country: "China",
      value: 1882
    }, {
      country: "Japan",
      value: 1809
    }, {
      country: "Germany",
      value: 1322
    }, {
      country: "UK",
      value: 1122
    }, {
      country: "France",
      value: 1114
    }, {
      country: "India",
      value: 984
    }, {
      country: "Spain",
      value: 711
    }, {
      country: "Netherlands",
      value: 665
    }, {
      country: "South Korea",
      value: 443
    }, {
      country: "Canada",
      value: 441
    }]
  }

  getMultiData(): any[] {
    return [{
      "year": "2019",
      "europe": 1.5,
      "namerica": 2.5,
      "asia": 4.1,
      "lamerica": 1,
      "meast": 0.5,
      "africa": 0.4
    }, {
      "year": "2020",
      "europe": 1.4,
      "namerica": 0.5,
      "asia": 2.5,
      "lamerica": 1.2,
      "meast": 1.8,
      "africa": 0.6
    }, {
      "year": "2021",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1,
      "meast": 0.8,
      "africa": 0.4
    }, {
      "year": "2022",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 0.5,
      "meast": 0.4,
      "africa": 0.3
    }, {
      "year": "2023",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 0.3,
      "meast": 0.9,
      "africa": 0.5
    }]
  }
}
