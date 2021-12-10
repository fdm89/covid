import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Property } from './property';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  fetchApi():Observable<any>{
    return this.http.get('https://api.covid19api.com/')
  }

  getPropertiesNumber():Observable<number>{
    return this.fetchApi().pipe(
      map( response => Object.keys(response).length)
    )
  }

  getPropertiesNames():Observable<string[]>{
    return this.fetchApi().pipe(
      map(response => Object.keys(response))
    )
  }

  getPropertiesValue():Observable<Property[]>{
   return this.fetchApi().pipe(
     map(response => Object.values(response))
   )
  }


}
