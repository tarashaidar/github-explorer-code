import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

  
@Injectable()
export class SearchService{

    baseUrl = `https://api.github.com/users`;
    constructor(private http: HttpClient){ }
      
    getData(): Observable<any>  {
        return this.http.get(this.baseUrl).pipe(
    catchError(err => {  
    console.log(err); 
    return throwError(err);
}));
    }

    getUser(userName: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + `/${userName}`).pipe(
            catchError(err => {  
            console.log(err); 
            return throwError(err);
        }));
    }

    getRepos(userName: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + `/${userName}/repos?sort=updated`).pipe(
            catchError(err => {  
            console.log(err); 
            return throwError(err);
        }));
      }


}
