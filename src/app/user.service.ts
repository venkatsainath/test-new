import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public get(url): Observable<any> {
    url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
    return this.http.get(url).pipe(map(res => res));
  }
}
