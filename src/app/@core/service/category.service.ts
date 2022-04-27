import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  public getAllCategories(): Observable<any> {
    const url1 = `${this.REST_API_SERVER}/categories`;
    return this.httpClient
      .get<any>(url1, this.httpOptions)
  }

  getRestaurant(districtId: number, id?: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/restaurants`;
    if (id) {
      return this.httpClient.get<any>(`${url}/${id}`)
    } else {
      return this.httpClient.get<any>(`${url}?district_Id=${districtId}`)
    }
  }

  getProduct(id?: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/restaurants`;
    return this.httpClient.get<any>(`${url}?restaurant_Id=${id}`)
  }
}
