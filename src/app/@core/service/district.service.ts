import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private currentDistrict = 1;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  public getDistrict(): Observable<any> {
    const url1 = `${this.REST_API_SERVER}/district`;
    return this.httpClient
      .get<any>(url1, this.httpOptions)
  }

  setCurrentDistrict(districtId: number) {
    this.currentDistrict = districtId
  }

  getCurrentDistrict(): Observable<any> {
    const url1 = `${this.REST_API_SERVER}/district/${this.currentDistrict}`;
    return this.httpClient
      .get<any>(url1, this.httpOptions)
  }


}
