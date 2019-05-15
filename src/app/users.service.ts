import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://reqres.in/api/users';
  constructor(
    private http: HttpClient
  ) { }

  getPages(): Observable<number> {
    return this.http.get<any>(this.url).pipe(
      tap(_ => console.log('Fetching pages')),
      map(response => response.total_pages)
    );
  }

  getUsersByPage(page): Observable<User[]> {
    return this.http.get<any>(`${this.url}?page=${page}`).pipe(
      tap(_ => console.log('Fetching users')),
      map(response => response.data)
    )
  }

  getUserByIdAndPage(id, page): Observable<User> {
    return this.http.get<any>(`${this.url}?page=${page}`).pipe(
      tap(_ => 'Fetching user'),
      map( res => res.data.filter(user => user.id === id)[0])
    )
  }

}
