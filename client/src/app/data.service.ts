import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = environment.API_KEY;
  apiId = environment.API_ID;
  constructor(private http: HttpClient) {

  }
  getData(): Observable<any> {
    // return this.http.get('https://api.data.charitynavigator.org/v2/Organizations?app_id=2637efc5&app_key=948eb06b5ccd93341d0ef00617dcc021' )
    return this.http.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${this.apiId}&app_key=${this.apiKey}`)
  }
}
