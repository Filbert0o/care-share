import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// tslint:disable-next-line:import-blacklist
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface IList {
  id: string;
  name: string;
  description: string;
  color: string;
  listId: string;
  user_id: string;
  sharedListUsers: Object[];
  usersOnList: any[];
}

@Injectable({ providedIn: "root" })
export class CrawlerService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getCrawler(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3001?depth=3&length=2&links=https://indeed.com/+https://craigslist.com&keyswords=job+volunteer`)
  }

  getLists(): Observable<IList[]> {
    return this.http.get<IList[]>(`${this.baseUrl}/api/lists`);
  }

  getListById(id: string): Observable<IList> {
    return this.http.get<IList>(`${this.baseUrl}/api/lists/${id}`);
  }

  addList(list: IList): Observable<IList> {
    return this.http.post<IList>(`${this.baseUrl}/api/lists`, list);
  }

  editList(list: IList): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/lists/${list.id}`, list);
  }

  deleteList(list: IList): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/lists/${list.id}`);
  }

  getUserSharedLists(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/sharedlists`);
  }

  getSharedLists(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/sharedlists/${id}`);
  }

  userSharedList(sharedList): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/sharedlists`, sharedList);
  }
}
