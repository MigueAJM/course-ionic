import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * ? operator "tap":
 * * ejecutar una acción cuando se recibe una subscripción, pero no tiene efectos secundarios
 * * transforma la "data".
 */
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  get posts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(console.log));
    //.pipe(tap((posts) => console.log(posts)));
  }
}
