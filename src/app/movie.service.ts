import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comment, Movie } from './types';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  serverUrl = 'https://movie-api.benoithubert.me';

  moviesPath = '/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrl}${this.moviesPath}`
      );
  }

  getMovie(id: number): Observable<Movie> {
    return this.http
      .get<Movie>(
        `${this.serverUrl}${this.moviesPath}/${id}`
      )
      .pipe(
        // catchError(error => this.handleError(error))
      );
  }

  postComment(comment: Partial<Comment>,idMovie: number): Observable<Comment> {
    return this.http
    .post<Comment>(
      `${this.serverUrl}${this.moviesPath}/${idMovie}/comments`,
      comment,
    );
  }
}
