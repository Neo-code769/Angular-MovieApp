import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Genre } from './types';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  serverUrl = 'https://movie-api.benoithubert.me';

  genresPath = '/genres/';

  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(
        `${this.serverUrl}${this.genresPath}`
      );
  }
}
